import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFormFunction) {
    super(popupSelector);
    this._submitForm = submitFormFunction;
    this._form = this._popup.querySelector('.popup__form');
    this._field = this._form.querySelectorAll('.popup__field');
  }

  close() {
    super.close();
    this._form.reset();
  }

  _getInputValue() {
    this._values = {};
    this._field.forEach(input => {
      this._values[input.name] = input.value;
    });
    console.log(this._values);
    return this._values;
  }

  setInputValue(object) {
    this._field.forEach(input => {
      input.value = object[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();
      this._submitForm(this._getInputValue());
      super.close();
    });
  }
}
