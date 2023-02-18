 class Api {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
  }

  getAllData() {
    return Promise.all([this.getAllCards(), this.getUserData()])
  }

  getAllCards() {
    return fetch(`${this.url}/cards`, {
      headers: this.headers
    })
      .then((res) => this._handleResponce(res))
      .catch(err => console.log(`Ошибка: что-то пошло не так: ${err}`))
  }

  createCards(data) {
    return fetch(`${this.url}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: data.nameCard,
        link: data.linkCard
      }),
    })
      .then((res) => this._handleResponce(res))
      .catch(err => console.log(`Ошибка: что-то пошло не так: ${err}`))
  }

  getUserData() {
    return fetch(`${this.url}/users/me `, {
      headers: this.headers,
    })
      .then((res) => this._handleResponce(res))
      .catch(err => console.log(`Ошибка: что-то пошло не так: ${err}`))
  }

  updateUserInfo(data) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: data.nameUser,
        about: data.aboutUser
      })
    })
      .then((res) => this._handleResponce(res))
      .catch(err => console.log(`Ошибка: что-то пошло не так: ${err}`))
  };

  changeAvatar(data) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: 'PATCH',
      body: JSON.stringify({ avatar: data.linkAvatar }),
      headers: this.headers,
    })
      .then((res) => this._handleResponce(res))
      .catch(err => console.log(`Ошибка: что-то пошло не так: ${err}`))
  }

  deleteCard(cardId) {
    return fetch(`${this.url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.headers,
    })
      .then((res) => this._handleResponce(res))
      .catch(err => console.log(`Ошибка: что-то пошло не так: ${err}`))
  }

  addLike(cardId) {
    return fetch(`${this.url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this.headers,
    })
      .then((res) => this._handleResponce(res))
      .catch(err => console.log(`Ошибка: что-то пошло не так: ${err}`))
  }

  deleteLike(cardId) {
    return fetch(`${this.url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this.headers,
    })
      .then((res) => this._handleResponce(res))
      .catch(err => console.log(`Ошибка: что-то пошло не так: ${err}`))
  }

  _handleResponce(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(res.status);
  }

}

export default api;
