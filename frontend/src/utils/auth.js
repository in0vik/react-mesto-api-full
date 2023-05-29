import { API_URL } from "../../config/config.js";

const checkResponse = (res) => res.ok ? res.json() : Promise.reject(res);

export const register = (email, password) => {
  return fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
  .then(checkResponse)
}

export const login = (email, password) => {
  return fetch(`${API_URL}/signin`, {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ password, email })
  })
  .then(checkResponse)
  .then((data) => {
    if (data.token) {
      localStorage.setItem('token', data.token);
      return data;
    }
  })
}

export const getAuthData = (token) => {
  return fetch(`${API_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    }
  })
  .then(checkResponse)
}