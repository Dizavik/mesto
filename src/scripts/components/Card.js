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
/*export default class Card {
  constructor(element, openPopup, template) {
    this._openPopup = openPopup;
    this._element = element;
    this._card = template;
  }

  _getTemplateClone() {
    return document.querySelector(this.template).content.querySelector('.element').cloneNode(true); // возвращает клонированную разметку
  }

  generate() {
    this._cloneElement = this._getTemplateClone();
    this._elementName = this._card.querySelector('.element__place');
    this._elementPhoto = this._card.querySelector('.element__image');
    this._likeElement = this._card.querySelector('.element__like-button');
    this._deleteElement = this._card.querySelector('.element__delete');
    this._popupImage = document.querySelector('.popup_type_img');
    this._popupImageContainer = this._popupImage.querySelector('.popup__fig');
    this._popupName = this._popupImage.querySelector('.popup__caption');

    this._elementName.textContent = this._element.name;
    this._elementPhoto.src = this._element.link;
    this._elementPhoto.alt = this._element.name;
    this._setEventListeners();
    return this._card;
  }

  _setEventListeners() {
    this._elementPhoto.addEventListener('click', () => this._handleImageClick());
    this._likeElement.addEventListener('click', () => this._handleLike());
    this._deleteElement.addEventListener('click', () => this._handleDelete());
  }

  _handleLike() {
    this._likeElement.classList.toggle('element__like-button_active');
  }

  _handleDelete() {
    this._card.remove();
  }
}
*/
