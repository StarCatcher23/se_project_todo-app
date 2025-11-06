class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    console.log("=============================");
    console.log(this._popupElement);
  }

  _handleEscapeClose = (evt) => {
    if (evt.key === "Escape") {
      this.close(); // ✅ Now this works!
    }
  };

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose);
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    console.log("close method called");
    document.removeEventListener("keyup", this._handleEscapeClose);
    //TODO-remove the escape listener
  }

  setEventListeners() {
    //this one listener will handle close button and modal listener
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains("popup") || // clicked on overlay
        evt.target.classList.contains("popup__close") // clicked on X
      ) {
        this.close();
      }
    });
  }
}

export default Popup;
