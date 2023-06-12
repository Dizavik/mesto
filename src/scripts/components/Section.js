export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
    this._items = items;
  }

  renderItems() {
    this._items.forEach(element => {
      this.addItem(element);
    });
  }

  addItem(card) {
    this._container.prepend(this._renderer(card));
  }
}
