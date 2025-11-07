class Todo {
  constructor(data, selector, handleCheck, handleDelete) {
    this._completed = data.completed;
    this._name = data.name;
    this._date = data.date;
    this._id = data.id;
    this._selector = selector;
    this._handleCheck = handleCheck;
    this._handleDelete = handleDelete;

    this._todoElement = this._getTemplate(); // initialize template
  }

  _setEventListeners() {
    this._todoDeleteBtn.addEventListener("click", () => {
      this._todoElement.remove(); // remove from DOM
      this._handleDelete(this._completed); // update counter
    });

    this._checkboxEl.addEventListener("change", () => {
      this._toggleCompletion();
      this._handleCheck(this._completed); // pass the new state
    });
  }

  _getTemplate() {
    return document
      .querySelector(this._selector)
      .content.querySelector(".todo")
      .cloneNode(true);
  }

  _generateNameEl() {
    this._nameEl = this._todoElement.querySelector(".todo__name");
    this._nameEl.textContent = this._name;
  }

  _generateDateEl() {
    this._dateEl = this._todoElement.querySelector(".todo__date");
    const dueDate = new Date(this._date);
    if (!isNaN(dueDate)) {
      this._dateEl.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }
  }

  _generateCheckboxEl() {
    this._checkboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");

    this._checkboxEl.checked = this._completed;
    this._checkboxEl.id = `todo-${this._id}`;
    this._todoLabel.setAttribute("for", `todo-${this._id}`);
  }

  _toggleCompletion() {
    this._completed = !this._completed;
  }

  getView() {
    this._generateNameEl();
    this._generateDateEl();
    this._generateCheckboxEl();

    this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

    this._setEventListeners();

    return this._todoElement;
  }
}

export default Todo;
