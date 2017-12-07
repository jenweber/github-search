'use strict'

const fs = require('fs')
const request = require('request');

function handleResponse(error, response, body) {
  // console.log(response)
  let endDate = response.req.path.split(':')[1].split('..')[0]
    if (!error && response.statusCode == 200) {
        fs.writeFile(`./data/${endDate}.json`, body, 'utf8', function (err) {
          if (err) {
              return console.log(err);
          }
          console.log(endDate + '.json' + ' saved');
      });
    }
}

function requestData(dateRange, user) {
  let options = {
      url: `https://api.github.com/search/repositories?q=ember+created:${dateRange}`,
      headers: {
          'Accept': 'application/vnd.github.mercy-preview+json',
          'User-Agent': user
      }
  };
  // console.log(options.url)
  request(options, handleResponse);
}

module.exports = requestData;
