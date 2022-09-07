import {
    setStyle,
    setStyles,
    srtToVtt,
    vttToBlob,
    getExt,
    assToVtt,
    escape,
    remove,
    append,
    createElement,
} from './utils';
import Component from './utils/component';
import validator from 'option-validator';
import scheme from './scheme';

export default class Subtitle extends Component {
    constructor(art) {
        super(art);
        this.name = 'subtitle';
        this.eventDestroy = () => null;
        this.init(art.option.subtitle);

        art.on('fullscreen', (state) => {
            if (!this.url) return;
            const { $video } = this.art.template;
            if (state && $video.webkitDisplayingFullscreen) {
                this.createTrack('subtitles', this.url);
            } else {
                this.createTrack('metadata', this.url);
            }
        });
    }

    get url() {
        return this.art.template.$track.src;
    }

    set url(url) {
        this.switch(url);
    }

    get textTrack() {
        return this.art.template.$video.textTracks[0];
    }

    get activeCue() {
        return this.textTrack.activeCues[0];
    }

    style(key, value) {
        const { $subtitle } = this.art.template;
        if (typeof key === 'object') {
            return setStyles($subtitle, key);
        }
        return setStyle($subtitle, key, value);
    }

    update() {
        const { $subtitle } = this.art.template;
        $subtitle.innerHTML = '';
        if (this.activeCue) {
            $subtitle.innerHTML = this.activeCue.text
                .split(/\r?\n/)
                .map((item) => `<p>${escape(item)}</p>`)
                .join('');
            this.art.emit('subtitleUpdate', this.activeCue.text);
        }
    }

    async switch(url, newOption = {}) {
        const { i18n, notice, option } = this.art;
        const subtitleOption = { ...option.subtitle, ...newOption, url };
        const subUrl = await this.init(subtitleOption);
        if (newOption.name) {
            notice.show = `${i18n.get('Switch Subtitle')}: ${newOption.name}`;
        }
        return subUrl;
    }

    createTrack(kind, url) {
        const { template, proxy } = this.art;
        const { $video, $track } = template;

        const $newTrack = createElement('track');
        $newTrack.default = true;
        $newTrack.kind = kind;
        $newTrack.src = url;

        this.eventDestroy();
        remove($track);

        append($video, $newTrack);
        template.$track = $newTrack;
        this.eventDestroy = proxy(this.textTrack, 'cuechange', () => this.update());
    }

    async init(subtitleOption) {
        const {
            notice,
            template: { $subtitle },
        } = this.art;

        validator(subtitleOption, scheme.subtitle);
        if (!subtitleOption.url) return;
        this.style(subtitleOption.style);

        return fetch(subtitleOption.url)
            .then((response) => response.arrayBuffer())
            .then((buffer) => {
                const decoder = new TextDecoder(subtitleOption.encoding);
                const text = decoder.decode(buffer);

                this.art.emit('subtitleLoad', subtitleOption.url);
                switch (subtitleOption.type || getExt(subtitleOption.url)) {
                    case 'srt':
                        return vttToBlob(srtToVtt(text));
                    case 'ass':
                        return vttToBlob(assToVtt(text));
                    case 'vtt':
                        return vttToBlob(text);
                    default:
                        return subtitleOption.url;
                }
            })
            .then((subUrl) => {
                $subtitle.innerHTML = '';
                if (this.url === subUrl) return subUrl;
                URL.revokeObjectURL(this.url);
                this.createTrack('metadata', subUrl);
                this.art.emit('subtitleSwitch', subUrl);
                return subUrl;
            })
            .catch((err) => {
                notice.show = err;
                throw err;
            });
    }
}
