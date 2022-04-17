const https = require('https');

let default_sleepTime = 2000;
async function sleep(time = default_sleepTime) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function get(url) {
  return new Promise((resolve, reject) => {
    if (url.includes('http://')) reject('Please use https://');

    url = url.replace('https://', '').split(/\/(.+)/);

    const options = {
      hostname: url[0],
      port: 443,
      method: 'GET',
      path: `/${url[1]}`,
    };

    request(options).then(async data => resolve(data));
  });
}
async function post(url) {
  return new Promise((resolve, reject) => {
    if (url.includes('http://')) reject('Please use https://');

    url = url.replace('https://', '').split(/\/(.+)/);

    const options = {
      hostname: url[0],
      port: 443,
      method: 'POST',
      path: `/${url[1]}`,
    };


    request(options).then(data => resolve(data));
  });
}

async function onChange(url, method, callback, interval = 10000) {
  let currentResponse = (method === 'GET') ? await get(url) : await post(url);

  setInterval(async () => {
    let response = null;

    response = (method === 'GET') ? await get(url) : await post(url);

    if (response != currentResponse) {
      currentResponse = response;
      callback(response);
    }

  }, interval);
}

async function request(options) {
  return new Promise((resolve, reject) => {
    let request = https.request(options, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
    request.on('error', e => reject(e.message));
    request.end();
  });
}

module.exports = {
  sleep,
  get,
  post,
  onChange
};