import './index.css';

import {
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
} from '../scripts/utils/constants.js';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';

const popupImage = new PopupWithImage(popupTypeImage);

const userInfo = new UserInfo(profileTitle, profileSubtitle);

const section = new Section(
  {
    items: initialCards,
    renderer: element => {
      const card = new Card(element, templateElement, popupImage.open);
      return card.generate();
    }
  },
  elements
);
section.createCardFromArray();

const popupOpenProfile = new PopupWithForm(popupProfileSelector, object => {
  userInfo.setUserInfo(object);
  popupOpenProfile.close();
});

const popupAddCard = new PopupWithForm(popupCardSelector, object => {
  section.addItem(object);
  popupAddCard.close();
});

const cardFormValidator = new FormValidator(config, popupAddForm);
cardFormValidator.enableValidation();

const profileFormValidator = new FormValidator(config, popupEddForm);
profileFormValidator.enableValidation();

addCardButton.addEventListener('click', () => {
  popupAddForm.reset();
  popupAddCard.open();
  cardFormValidator.resetValidation(popupAddForm);
});

profileEditButton.addEventListener('click', () => {
  popupOpenProfile.open();
  popupOpenProfile.setInputValue(userInfo.getUserInfo());
  profileFormValidator.resetValidation(popupEddForm);
});

popupImage.setEventListeners();
popupOpenProfile.setEventListeners();
popupAddCard.setEventListeners();
