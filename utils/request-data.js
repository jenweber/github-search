'use strict'

const fs = require('fs')
const request = require('request');

function handleResponse(error, response, body) {
  // console.log(response)
  let endDate = response.req.path.split(':')[1].split('..')[0]
  console.log(endDate)
    if (!error && response.statusCode == 200) {
        // console.log(body);
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
