'use strict'

const request = require('request');

const headers = {
    'Accept': 'application/vnd.github.mercy-preview+json'
};

function handleResponse(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

function requestData(dateRange) {
  let options = {
      url: `https://api.github.com/search/repositories?q=ember+created:${dateRange}`,
      headers: headers
  };
  console.log(options.url)
  // request(options, handleResponse);
}

module.exports = requestData;
