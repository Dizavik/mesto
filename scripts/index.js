const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popup = document.querySelector('.popup');

const popupProfile = document.querySelector('.popup_type_profile');

const popupContainer = document.querySelector('.popup__container');
const profileEditButton = document.querySelector('.profile__editbutton');
const addCardButton = document.querySelector('.profile__addbutton');
const closePopupButton = document.querySelector('.popup__closeButton');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__field_type_name');
const aboutInput = document.querySelector('.popup__field_type_about');
const submitPopupButton = document.querySelector('.popup__submit');

const popupCard = document.querySelector('.popup_type_card');
const closePopupButtonCard = popupCard.querySelector('.popup__closeButton');
const formCard = popupCard.querySelector('.popup__container');
const placeField = formCard.querySelector('.popup__field_type_place');
const UrlField = formCard.querySelector('.popup__field_type_url');

const cardsElements = document.querySelector('.elements');
const templateElement = document.querySelector('.template__element');

const popupImg = document.querySelector('.popup_type_img');
const popupImgFig = popupImg.querySelector('.popup__fig');
const popupImgCaption = popupImg.querySelector('.popup__caption');
const popupImgClose = popupImg.querySelector('.popup__closeButton');

const openPopup = popup => {
  popup.classList.add('popup_opened');
};
const closePopup = popup => {
  popup.classList.remove('popup_opened');
};

//Elements

const createElement = card => {
  const cardElement = templateElement.content.querySelector('.element').cloneNode(true);
  const elemImg = cardElement.querySelector('.element__image');
  const cardName = cardElement.querySelector('.element__place');
  const deleteButton = cardElement.querySelector('.elements__delete');
  const likeButton = cardElement.querySelector('.element__likeButton');

  elemImg.src = card.link;
  elemImg.alt = card.name;
  cardName.textContent = card.name;

  //delete card
  deleteButton.addEventListener('click', () => {
    cardElement.remove();
  });

  //like
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('element__likeButton_active');
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
  cardsElements.prepend(createElement(item));
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
    link: UrlField.value
  };
  cardsElements.prepend(createElement(ElementData));
  closePopup(popupCard);
};
formCard.addEventListener('submit', handleElementFormSubmit);

//profile

handleFormSubmit = e => {
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

popupContainer.addEventListener('submit', handleFormSubmit);
