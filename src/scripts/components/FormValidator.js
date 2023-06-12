export default class FormValidator {
  constructor(config, form) {
    this._form = form;
    this._submitButtonSelector = config.submitButtonSelector;
    this._disableButtonClass = config.disableButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._textErrorClass = config.textErrorClass;
    this._errorSelectorTemplate = config.errorSelectorTemplate;
    this._inputSelector = this._form.querySelectorAll(config.inputSelector);
    this._inputs = Array.from(this._inputSelector);
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
  }

  enableValidation() {
    this._setEventListeners();
  }

  resetValidation() {
    this._toggleButtonValidity();

    this._inputs.forEach(inputElement => {
      this._errorMassage(inputElement);
    });
  }

  _errorMassage(input) {
    const errElement = this._form.querySelector(`${this._errorSelectorTemplate}${input.name}`);
    this._setInputInvalidState(input, errElement);
  }

  _setEventListeners() {
    this._setSubmitListener();
    this._inputs.forEach(input => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonValidity();
      });
    });
  }

  _checkInputValidity(input) {
    const errElement = this._form.querySelector(`${this._errorSelectorTemplate}${input.name}`);

    if (input.checkValidity()) {
      this._setInputInvalidState(input, errElement);
    } else {
      this._setInputValidState(input, errElement);
    }
  }

  _setSubmitListener() {
    this._form.addEventListener('submit', event => {
      event.preventDefault();
      this._toggleButtonValidity();
    });
  }

  _toggleButtonValidity() {
    if (this._form.checkValidity()) {
      this._enableButton();
    } else {
      this._disableButton();
    }
  }

  _setInputValidState = (input, errElement) => {
    input.classList.add(this._inputErrorClass);
    errElement.classList.add(this._textErrorClass);
    errElement.textContent = input.validationMessage;
  };

  _setInputInvalidState = (input, errElement) => {
    input.classList.remove(this._inputErrorClass);
    errElement.classList.remove(this._textErrorClass);
    errElement.textContent = '';
  };

  _disableButton = () => {
    this._submitButton.setAttribute('disabled', '');
    this._submitButton.classList.add(this._disableButtonClass);
  };

  _enableButton = () => {
    this._submitButton.removeAttribute('disabled');
    this._submitButton.classList.remove(this._disableButtonClass);
  };
}
