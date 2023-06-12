export default class UserInfo {
  constructor(profileTitle, profileSubtitle) {
    this._profileName = document.querySelector(profileTitle);
    this._profileJob = document.querySelector(profileSubtitle);
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileJob.textContent
    };
  }

  setUserInfo(userData) {
    this._profileName.textContent = userData.name;
    this._profileJob.textContent = userData.about;
  }
}
