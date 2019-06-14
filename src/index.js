import requests from './requests/index.js';
import components from './components/index.js';

const urlData = 'https://jsonplaceholder.typicode.com';

requests
  .makeRequest(`${urlData}/users`)
  .then((users) => {
    users.forEach(({ name, username, company: { name: companyName } }) => {
      new components.PreviewUserComponent(
        name,
        username,
        companyName,
      ).initComponent('box');
    });
  })
  .catch((error) => console.error(error));
