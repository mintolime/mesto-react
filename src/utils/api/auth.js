export const BASE_URL = 'https://auth.nomoreparties.co';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const handleResponce = (res) =>{
   if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }


export const register = ({ email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ email, password }),
  }).then((res) => handleResponce(res));
};

export const authorize = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ email, password }),
  }).then((res) => handleResponce(res));
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => handleResponce(res));
};