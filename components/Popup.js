class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");

    // ✅ Bind the escape handler to the class instance
    this._handleEscapeClose = this._handleEscapeClose.bind(this);

    console.log("=============================");
    console.log(this._popupElement);
  }

  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      this.close(); // ✅ Now this works!
    }
  }

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
    this._popupCloseBtn.addEventListener("click", () => {
      this.close();
    });
    this._popupElement.addEventListener("mousedown", (evt) => {
      const target = evt.target;

      if (
        target.classList.contains("popup__close") ||
        target.classList.contains("popup")
      ) {
        this.close(); // or whatever method closes your modal
      }
    });
  }
}

export default Popup;
