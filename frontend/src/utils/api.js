import { API_URL } from '../../config/config.js'
class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(this._handleResponse)
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
  })
    .then(this._handleResponse)
  }

  updateUserInfo({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        about: about
      }),
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`
      },
  })
    .then(this._handleResponse)
  }

  addNewCard({name, link}) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
  })
    .then(this._handleResponse)
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
  })
    .then(this._handleResponse)
  }

  likeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
  })
    .then(this._handleResponse)
  }

  dislikeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
  })
    .then(this._handleResponse)
  }

  changeLikeCardStatus(cardId, isLiked) {
    return isLiked ? this.likeCard(cardId) : this.dislikeCard(cardId);
  }

  updateAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        avatar: avatar
      })
  })
    .then(this._handleResponse)
  }
}

const api = new Api({
  baseUrl: API_URL,
});

export default api;


