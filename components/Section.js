class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
      const element = this._renderer(item);
      this.addItem(element);
    });
  }
  addItem(element) {
    console.log(element, this._container);

    this._container.appendChild(element); // Add the element to the container in the DOM
  }
}

export default Section;
