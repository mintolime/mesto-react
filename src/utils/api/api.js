class Api {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
  }

  getAllData() {
    return Promise.all([this.getAllCards(), this.getUserData()]);
  }

  getAllCards() {
    return fetch(`${this.url}/cards`, {
      headers: this.headers,
    }).then((res) => this._handleResponce(res));
  }

  createCards(data) {
    return fetch(`${this.url}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: data.nameCard,
        link: data.linkCard,
      }),
    }).then((res) => this._handleResponce(res));
  }

  getUserData() {
    return fetch(`${this.url}/users/me `, {
      headers: this.headers,
    }).then((res) => this._handleResponce(res));
  }

  updateUserInfo(data) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then((res) => this._handleResponce(res));
  }

  changeAvatar(data) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: 'PATCH',
      body: JSON.stringify({ avatar: data.linkAvatar }),
      headers: this.headers,
    }).then((res) => this._handleResponce(res));
  }

  deleteCard(cardId) {
    return fetch(`${this.url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.headers,
    }).then((res) => this._handleResponce(res));
  }

  changeLikeCardStatus(id, isLiked) {
    if (!isLiked) {
      return this.addLike(id);
    } else {
      return this.deleteLike(id);
    }
  }

  addLike(cardId) {
    return fetch(`${this.url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this.headers,
    }).then((res) => this._handleResponce(res));
  }

  deleteLike(cardId) {
    return fetch(`${this.url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this.headers,
    }).then((res) => this._handleResponce(res));
  }

  _handleResponce(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }
}

export const apiData = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-58',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    authorization: '54338beb-6a3f-46f8-bd6b-cdb1bf1c9692',
  },
});
