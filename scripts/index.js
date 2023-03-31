let popup = document.querySelector('.popup');
let popupContainer = document.querySelector('.popup__container');
let openPopupButton = document.querySelector('.profile__editbutton');
let closePopupButton = document.querySelector('.popup__closeButton');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.name');
let aboutInput = document.querySelector('.about');
let submitPopupButton = document.querySelector('.popup__submit');

function openPopup() {
  popup.classList.add('popup_opened');
  popupContainer.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  aboutInput.value = profileSubtitle.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
  popupContainer.classList.remove('popup_opened');
}

function closePopupDocument(e) {
  if (e.target === popup) {
    popup.classList.remove('popup_opened');
    popupContainer.classList.remove('popup_opened');
  }
}

function handleFormSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = aboutInput.value;
  closePopup(popup);
}

popupContainer.addEventListener('submit', handleFormSubmit);
openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
document.addEventListener('click', closePopupDocument);
