const initialCards = [
  {
    title: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    title: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    title: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    title: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    title: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const profileTitle = '.profile__title';
const profileEditButton = document.querySelector('.profile__edit-button');
const profileSubtitle = '.profile__subtitle';
const addCardButton = document.querySelector('.profile__add-button');

const popupProfile = document.querySelector('.popup_type_profile');
const popupForm = popupProfile.querySelector('.popup__form');
const nameInput = popupForm.querySelector('.popup__field_type_name');
const aboutInput = popupForm.querySelector('.popup__field_type_about');

const popupAddForm = document.querySelector('.popup__form_add');
const popupEddForm = document.querySelector('.popup__form_edit');

const popupCard = document.querySelector('.popup_type_card');
const formCard = popupCard.querySelector('.popup__container');

const popupProfileSelector = '.popup_type_profile';
const popupCardSelector = '.popup_type_card';
const templateElement = '.template__element';
const popupTypeImage = '.popup_type_img';
const elements = '.elements';

const config = {
  inputForms: document.forms,
  inputSelector: '.popup__field',
  errorSelectorTemplate: '.popup__error_type_',
  submitButtonSelector: '.popup__submit',
  disableButtonClass: 'popup__submit-button_disable',
  inputErrorClass: 'popup__field_invalid',
  textErrorClass: 'popup__error_visible'
};

export {
  initialCards,
  config,
  profileTitle,
  profileEditButton,
  profileSubtitle,
  addCardButton,
  popupProfile,
  popupForm,
  nameInput,
  aboutInput,
  popupAddForm,
  popupEddForm,
  popupCard,
  formCard,
  popupProfileSelector,
  popupCardSelector,
  templateElement,
  popupTypeImage,
  elements
};
