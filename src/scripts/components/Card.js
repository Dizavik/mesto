export default class Card {
  constructor(cardData, template, openImage) {
    this._cardData = cardData;
    this._link = cardData.link;
    this._name = cardData.title;
    this._template = template;
    this._openImage = openImage;
  }

  _getTemplateClone() {
    return document.querySelector(this._template).content.querySelector('.element').cloneNode(true);
  }

  _handleLikeButton = () => {
    this._likeButtonElement.classList.toggle('element__like-button_active');
  };

  _handleTrashButton = () => {
    this._cloneElement.remove();
    this._cloneElement = null;
  };

  _handleImagePopup = () => {
    this._openImage(this._cardData);
  };

  _setEventListener() {
    this._likeButtonElement.addEventListener('click', this._handleLikeButton);
    this._trashElement.addEventListener('click', this._handleTrashButton);
    this._photoElement.addEventListener('click', this._handleImagePopup);
  }

  generate() {
    this._cloneElement = this._getTemplateClone();
    this._trashElement = this._cloneElement.querySelector('.element__delete');
    this._photoElement = this._cloneElement.querySelector('.element__image');
    this._likeButtonElement = this._cloneElement.querySelector('.element__like-button');
    this._titleElement = this._cloneElement.querySelector('.element__place');

    this._photoElement.src = this._link;
    this._photoElement.alt = this._name;
    this._titleElement.textContent = this._name;
    this._setEventListener();

    return this._cloneElement;
  }
}
