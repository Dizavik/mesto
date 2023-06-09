import './index.css';

import {
  popupEditButtonElement,
  popupAddButtonElement,
  selectorTemplate,
  popupProfileSelector,
  popupImageSelector,
  cardContainerSelector,
  popupAddCardSelector,
  popupDeleteSelector,
  profileNameSelector,
  profileJobSelector,
  profileAvatarSelector,
  validationConfig,
  formEditProfileElement,
  formAddCardElement,
  formEditAvatarElement,
  popupEditAvatarButtomElement,
  popupAvatarSelector,
  defaultDeleteText
} from '../scripts/utils/Constants.js';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupDeleteCard from '../scripts/components/PopupDeleteCard.js';
import Api from '../scripts/components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-68',
  headers: {
    authorization: 'cc729bd2-65ed-4da4-b56e-251fa132eea8',
    'Content-Type': 'application/json'
  }
});

const userInfo = new UserInfo(profileNameSelector, profileJobSelector, profileAvatarSelector);
const popupImage = new PopupWithImage(popupImageSelector);

const deleteCardPopup = new PopupDeleteCard(popupDeleteSelector, ({ card, cardId }) => {
  api
    .removeCard(cardId)
    .then(() => {
      card.deleteCardElement();
      deleteCardPopup.close();
    })
    .catch(error => console.error(`Ошибка удаления карточки ${error}`))
    .finally(() => (deleteCardPopup.submitButton.textContent = defaultDeleteText));
});

const popupProfile = new PopupWithForm(popupProfileSelector, data => {
  api
    .setUserInfo(data)
    .then(res => {
      userInfo.setUserInfo({
        name: res.name,
        job: res.about,
        avatar: res.avatar
      });
      popupProfile.close();
    })
    .catch(error => console.error(`Ошибка редактирования ${error}`))
    .finally(() => popupProfile.setDefaultText());
});

const popupAddCard = new PopupWithForm(popupAddCardSelector, data => {
  api
    .addCards(data)
    .then(dataCard => {
      dataCard.myid = userInfo.getId();
      section.addItemPrepend(createNewCard(dataCard));
      popupAddCard.close();
    })
    .catch(error => console.error(`Ошибка создания карточки ${error}`))
    .finally(() => popupAddCard.setDefaultText());
});

const popupEditAvatar = new PopupWithForm(popupAvatarSelector, data => {
  api
    .setNewAvatar(data)
    .then(res => {
      userInfo.setUserInfo({
        name: res.name,
        job: res.about,
        avatar: res.avatar
      });
      popupEditAvatar.close();
    })
    .catch(error => console.error(`Ошибка обновления аватара ${error}`))
    .finally(() => popupEditAvatar.setDefaultText());
});

function createNewCard(element) {
  const card = new Card(
    element,
    selectorTemplate,
    popupImage.open,
    deleteCardPopup.open,
    (isLiked, cardId) => {
      if (isLiked) {
        api
          .removeLikes(cardId)
          .then(res => {
            card.toggleLike(res.likes);
          })
          .catch(error => console.error(`Ошибка снятия лайка ${error}`));
      } else {
        api
          .addLikes(cardId)
          .then(res => {
            card.toggleLike(res.likes);
          })
          .catch(error => console.error(`Ошибка добавления лайка ${error}`));
      }
    }
  );
  const cardElement = card.createCard();
  return cardElement;
}

const section = new Section(element => {
  section.addItemAppend(createNewCard(element));
}, cardContainerSelector);

popupEditButtonElement.addEventListener('click', () => {
  formProfileInfoValidator.resetErrorInput();
  popupProfile.setInputValue(userInfo.getUserInfo());
  popupProfile.open();
});

popupAddButtonElement.addEventListener('click', () => {
  formAddCardValidator.resetErrorInput();
  popupAddCard.open();
});

popupEditAvatarButtomElement.addEventListener('click', () => {
  formEditAvatarValidator.resetErrorInput();
  popupEditAvatar.open();
});

Promise.all([api.getInfo(), api.getCards()])
  .then(([dataUser, dataCard]) => {
    dataCard.forEach(element => (element.myid = dataUser._id));
    userInfo.setUserInfo({
      name: dataUser.name,
      job: dataUser.about,
      avatar: dataUser.avatar
    });
    userInfo.setId(dataUser._id);
    section.addCardFromArray(dataCard);
  })
  .catch(error => console.error(`Ошибка редактирования ${error}`));

const formProfileInfoValidator = new FormValidator(validationConfig, formEditProfileElement);
formProfileInfoValidator.enableValidation();

const formAddCardValidator = new FormValidator(validationConfig, formAddCardElement);
formAddCardValidator.enableValidation();

const formEditAvatarValidator = new FormValidator(validationConfig, formEditAvatarElement);
formEditAvatarValidator.enableValidation();

popupImage.setEventListeners();
popupAddCard.setEventListeners();
popupProfile.setEventListeners();
popupEditAvatar.setEventListeners();
deleteCardPopup.setEventListeners();
