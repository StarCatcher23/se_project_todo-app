class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    console.log("=============================");
    console.log(this._popupElement);
  }
}
export default Popup;
