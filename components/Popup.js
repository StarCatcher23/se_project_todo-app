class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
    console.log("=============================");
    console.log(this._popupElement);
  }

  open() {
    this._popupElement.classList.add("popup_visible");
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    console.log("close method called");
  }

  setEventListeners() {
    this._popupCloseBtn.addEventListener("click", () => {
      this.close();
    });
  }
}

export default Popup;
