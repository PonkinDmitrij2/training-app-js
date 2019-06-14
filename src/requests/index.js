function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);

    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(xhr.statusText);
      }
    });

    xhr.addEventListener('error', (error) => reject(error));
    xhr.send();
  });
}

export default { makeRequest };
