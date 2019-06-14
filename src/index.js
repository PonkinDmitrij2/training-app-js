import requests from './requests/index.js';

const urlData = 'https://jsonplaceholder.typicode.com';

requests
  .makeRequest(`${urlData}/users`)
  .then((users) => users.forEach((user) => console.log(user)))
  .catch((error) => console.error(error));
