'use strict'

const fs = require('fs')


let twoDayJson = fs.readFileSync("../data/github-one-month-2017.json");
let count = JSON.parse(twoDayJson).items.length

console.log(count)
