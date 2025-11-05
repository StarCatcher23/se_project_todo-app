class Section {
  constructor({ items, renderer, containerSelector }) {
    //destructuring properties of these names with curly braces
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((item) => this._renderer(item)); //public method named renderItems() that renders all elements on the page. It should iterate through the items array and call the renderer() function on each item.
  }
  //public method named addItem() that takes a DOM element and adds it to the container. This method should be called when adding an individual card to the DOM.
  addItem(element) {
    this._container.appendChild(element);
  }
}

export default Section;
