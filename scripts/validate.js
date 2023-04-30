const validationSet = {
  inputForms: document.forms,
  inputSelector: '.popup__field',
  errorSelectorTemplate: '.popup__error_type_',
  submitButtonSelector: '.popup__submit',
  disableButtonClass: 'popup__submit-button_disable',
  inputErrorClass: 'popup__field_invalid',
  textErrorClass: 'popup__error_visible'
};

//Включение валидации
function enableValidation(set) {
  const forms = Array.from(set.inputForms);
  forms.forEach(form => {
    const inputElements = form.querySelectorAll(set.inputSelector);
    const submitButton = form.querySelector(set.submitButtonSelector);
    setEventListener(
      inputElements,
      submitButton,
      set.errorSelectorTemplate,
      set.disableButtonClass,
      set.inputErrorClass,
      set.textErrorClass
    );
  });
}

//Слушатель
function setEventListener(
  inputElements,
  submitButton,
  errorSelectorTemplate,
  disableButtonClass,
  inputErrorClass,
  textErrorClass
) {
  inputElements.forEach(input => {
    input.addEventListener('input', () => {
      checkInputValidity(input, errorSelectorTemplate, inputErrorClass, textErrorClass);
      toggleButtonState(inputElements, submitButton, disableButtonClass);
    });
  });
}

//Проверка инпутов
function checkInputValidity(input, errorSelectorTemplate, inputErrorClass, textErrorClass) {
  const errorTextElement = document.querySelector(`${errorSelectorTemplate}${input.name}`);
  input.validity.valid
    ? hideInputError(input, errorTextElement, inputErrorClass, textErrorClass)
    : showInputError(input, errorTextElement, inputErrorClass, textErrorClass);
}

//Отображения ошибки
function showInputError(input, errorTextElement, inputErrorClass, textErrorClass) {
  input.classList.add(inputErrorClass);
  errorTextElement.textContent = input.validationMessage;
  errorTextElement.classList.add(textErrorClass);
}

//Скрытия ошибки
function hideInputError(input, errorTextElement, inputErrorClass, textErrorClass) {
  input.classList.remove(inputErrorClass);
  errorTextElement.textContent = '';
  errorTextElement.classList.remove(textErrorClass);
}

//Изменения состояния кнопки
function toggleButtonState(inputElements, submitButton, disableButtonClass) {
  !validInput(inputElements)
    ? enableButton(submitButton, disableButtonClass)
    : disableButton(submitButton, disableButtonClass);
}

//Возвращения валидности инпутов
function validInput(inputElements) {
  return Array.from(inputElements).some(input => !input.validity.valid);
}

//Включения кнопки
function enableButton(submitButton, disableButtonClass) {
  submitButton.classList.remove(disableButtonClass);
  submitButton.disabled = false;
}

//Выключения кнопки
function disableButton(submitButton, disableButtonClass) {
  submitButton.classList.add(disableButtonClass);
  submitButton.disabled = true;
}

//Сброс проверки валидации формы
function resetErrorInOpenForm(form, set) {
  const submitButton = form.querySelector(set.submitButtonSelector);
  form.querySelectorAll(set.inputSelector).forEach(input => {
    const errorTextElement = form.querySelector(`${set.errorSelectorTemplate}${input.name}`);
    if (!input.validity.valid) {
      hideInputError(input, errorTextElement, set.inputErrorClass);
    }
  });
  disableButton(submitButton, set.disableButtonClass);
}
