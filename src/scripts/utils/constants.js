export const profileElement = document.querySelector('.profile');
export const editAvatar = document.querySelector('.profile__avatar');

export const popupEditAvatarButtomElement = profileElement.querySelector('.profile__avatar-button');
export const popupEditButtonElement = profileElement.querySelector('.profile__edit-button');
export const popupAddButtonElement = profileElement.querySelector('.profile__add-button');

export const profilePopupElement = document.querySelector('.profile-popup');
export const cardPopupElement = document.querySelector('.card-popup');
export const editAvatarElement = document.querySelector('.avatar-popup');

export const formEditAvatarElement = editAvatarElement.querySelector('.popup__form');
export const formEditProfileElement = profilePopupElement.querySelector('.popup__form');
export const formAddCardElement = cardPopupElement.querySelector('.popup__form');

export const selectorTemplate = '#cardTemplate';
export const popupProfileSelector = '.profile-popup';
export const popupImageSelector = '.popup_type_img';
export const popupAvatarSelector = '.avatar-popup';
export const popupAddCardSelector = '.card-popup';
export const popupDeleteSelector = '.delete-popup';
export const cardContainerSelector = '.elements';

export const profileNameSelector = '.profile__title';
export const profileJobSelector = '.profile__subtitle';
export const profileAvatarSelector = '.profile__avatar';

export const defaultDeleteText = 'Дa';

// переменая с объектом для валидации
export const validationConfig = {
  formSelector: '.popup__form', // все формы в документе
  inputSelector: '.popup__field', // inputList
  errorSelectorTemplate: '.popup__error_type_', // шаблон для разных инпутов
  submitButtonSelector: '.popup__submit', //button

  disabledButtonClass: 'popup__submit-button_disable', // button disabled
  inputErrorClass: 'popup__field_invalid', // input
  textErrorClass: 'popup__error_visible' // span
};
