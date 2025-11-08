class TodoCounter {
  constructor(todos, selector) {
    this._element = document.querySelector(selector);

    if (!this._element) {
      console.warn(`TodoCounter: No element found for selector "${selector}"`);
    }

    this._total = Array.isArray(todos) ? todos.length : 0;
    this._completed = Array.isArray(todos)
      ? todos.filter((todo) => todo.completed).length
      : 0;

    this._updateText();
  }

  updateCompleted(increment) {
    if (increment) {
      this._completed++;
    } else {
      this._completed--;
    }
    this._updateText(); // ← Use the method that exists!
  }

  updateTotal = (increment) => {
    this._total += increment ? 1 : -1;
    this._total = Math.max(0, this._total); // prevent negative count
    this._updateText();
  };
  _updateText() {
    if (this._element) {
      this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
    }
  }
}

export default TodoCounter;
