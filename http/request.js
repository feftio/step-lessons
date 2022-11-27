const http = require('http');

const options = {
  host: 'www.vk.com',
  path: '/'
};

const callback = function(response) {
  let str = 'Data: ';

  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
}

http.request(options, callback).end();