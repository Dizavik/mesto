const profileElement = document.querySelector('.profile');
const editAvatar = document.querySelector('.profile__avatar');

const popupEditAvatarButtomElement = profileElement.querySelector('.profile__avatar-button');
const popupEditButtonElement = profileElement.querySelector('.profile__edit-button');
const popupAddButtonElement = profileElement.querySelector('.profile__add-button');

const profilePopupElement = document.querySelector('.profile-popup');
const cardPopupElement = document.querySelector('.card-popup');
const editAvatarElement = document.querySelector('.avatar-popup');

const formEditAvatarElement = editAvatarElement.querySelector('.popup__form');
const formEditProfileElement = profilePopupElement.querySelector('.popup__form');
const formAddCardElement = cardPopupElement.querySelector('.popup__form');

const selectorTemplate = '#cardTemplate';
const popupProfileSelector = '.profile-popup';
const popupImageSelector = '.image-popup';
const popupAvatarSelector = '.avatar-popup';
const popupAddCardSelector = '.card-popup';
const popupDeleteSelector = '.delete-popup';
const cardContainerSelector = '.elements__container';

const profileNameSelector = '.profile__name';
const profileJobSelector = '.profile__job';
const profileAvatarSelector = '.profile__avatar';

const defaultDeleteText = 'Дa';

// переменая с объектом для валидации
export const validationConfig = {
  formSelector: '.popup__form', // все формы в документе
  inputSelector: '.popup__input', // inputList
  errorSelectorTemplate: '.popup__error_', // шаблон для разных инпутов
  submitButtonSelector: '.popup__submit-button', //button

  disabledButtonClass: 'popup__submit-button_disabled', // button disabled
  inputErrorClass: 'popup__input_invalid', // input
  textErrorClass: 'popup__error_visible' // span
};

export {
  profileElement,
  editAvatar,
  popupEditAvatarButtomElement,
  popupEditButtonElement,
  popupAddButtonElement,
  profilePopupElement,
  cardPopupElement,
  editAvatarElement,
  formEditAvatarElement,
  formEditProfileElement,
  formAddCardElement,
  selectorTemplate,
  popupProfileSelector,
  popupImageSelector,
  popupAvatarSelector,
  popupAddCardSelector,
  popupDeleteSelector,
  cardContainerSelector,
  profileNameSelector,
  profileJobSelector,
  profileAvatarSelector,
  defaultDeleteText
};
