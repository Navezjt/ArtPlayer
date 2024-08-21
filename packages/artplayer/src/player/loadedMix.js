import { def } from '../utils';

export default function seekMix(art) {
    const { $video } = art.template;

    def(art, 'loaded', {
        get: () => art.loadedTime / $video.duration,
    });

    def(art, 'loadedTime', {
        get: () => {
            if (typeof $video.loadedTime === 'number') {
                return $video.loadedTime;
            } else {
                return $video.buffered.length ? $video.buffered.end($video.buffered.length - 1) : 0;
            }
        },
    });
}
