export default class Notice {
  constructor(art) {
    this.art = art;
    this.timer = null;
  }

  show(msg, autoHide) {
    const { $notice } = this.art.refs;
    $notice.style.display = 'block';
    $notice.innerHTML = msg instanceof Error ? msg.message.trim() : msg;
    if (autoHide) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.hide();
      }, 1000);
    }
    this.art.emit('notice:show', $notice);
  }

  hide() {
    const { $notice } = this.art.refs;
    $notice.style.display = 'none';
    this.art.emit('notice:hide', $notice);
  }
}
