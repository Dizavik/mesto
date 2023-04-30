const popupElements = document.querySelectorAll('.popup');

const profileTitle = document.querySelector('.profile__title');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileSubtitle = document.querySelector('.profile__subtitle');
const addCardButton = document.querySelector('.profile__add-button');

const popupProfile = document.querySelector('.popup_type_profile');
const closePopupButton = popupProfile.querySelector('.popup__close-button');
const popupForm = popupProfile.querySelector('.popup__form');
const nameInput = popupForm.querySelector('.popup__field_type_name');
const aboutInput = popupForm.querySelector('.popup__field_type_about');
const submitPopupButton = document.querySelector('.popup__submit');

const popupCard = document.querySelector('.popup_type_card');
const closePopupButtonCard = popupCard.querySelector('.popup__close-button');
const formCard = popupCard.querySelector('.popup__container');
const placeField = formCard.querySelector('.popup__field_type_place');
const urlField = formCard.querySelector('.popup__field_type_url');

const cardsElements = document.querySelector('.elements');
const templateElement = document.querySelector('.template__element');

const popupImg = document.querySelector('.popup_type_img');
const popupImgFig = popupImg.querySelector('.popup__fig');
const popupImgCaption = popupImg.querySelector('.popup__caption');
const popupImgClose = popupImg.querySelector('.popup__close-button');

const openPopup = popup => {
  document.addEventListener('keydown', closePopupEscape);
  popup.classList.add('popup_opened');
};
const closePopup = popup => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscape);
};

function closePopupEscape(evt) {
  if (evt.key === 'Escape') {
    const popupEscape = document.querySelector('.popup_opened');
    closePopup(popupEscape);
  }
}

popupElements.forEach(popup => {
  popup.addEventListener('click', evt => {
    if (evt.target === evt.currentTarget) {
      closePopup(popup);
    }
  });
});

//Elements

const createElement = card => {
  const cardElement = templateElement.content.querySelector('.element').cloneNode(true);
  const elemImg = cardElement.querySelector('.element__image');
  const cardName = cardElement.querySelector('.element__place');
  const deleteButton = cardElement.querySelector('.element__delete');
  const likeButton = cardElement.querySelector('.element__like-button');

  elemImg.src = card.link;
  elemImg.alt = card.name;
  cardName.textContent = card.name;

  //delete card
  deleteButton.addEventListener('click', () => {
    cardElement.remove();
  });

  //like
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('element__like-button_active');
  });

  //zoom image
  elemImg.addEventListener('click', e => {
    e.preventDefault();
    openPopup(popupImg);
    popupImgFig.src = card.link;
    popupImgFig.alt = card.name;
    popupImgCaption.textContent = card.name;
  });
  return cardElement;
};

popupImgClose.addEventListener('click', () => {
  closePopup(popupImg);
});

initialCards.forEach(item => {
  cardsElements.append(createElement(item));
});

addCardButton.addEventListener('click', () => {
  openPopup(popupCard);
});

closePopupButtonCard.addEventListener('click', () => {
  closePopup(popupCard);
});

//add card
const handleElementFormSubmit = e => {
  e.preventDefault();
  const ElementData = {
    name: placeField.value,
    link: urlField.value
  };
  cardsElements.prepend(createElement(ElementData));
  closePopup(popupCard);
  e.target.reset();
};
formCard.addEventListener('submit', handleElementFormSubmit);

//profile

handleProfileFormSubmit = e => {
  e.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = aboutInput.value;
  closePopup(popupProfile);
};

profileEditButton.addEventListener('click', () => {
  openPopup(popupProfile);
  nameInput.value = profileTitle.textContent;
  aboutInput.value = profileSubtitle.textContent;
});

closePopupButton.addEventListener('click', () => {
  closePopup(popupProfile);
});

popupForm.addEventListener('submit', handleProfileFormSubmit);

enableValidation(validationSet);
