const folder = './data/';
const fs = require('fs');

let data = []

fs.readdirSync(folder).forEach(file => {
  let json = fs.readFileSync(`./data/${file}`)
  let obj = JSON.parse(json)
  let date = file.split('.')[0]
  let incompleteResults = obj.incomplete_results
  let totalCount = obj.total_count
  data.push([ date, totalCount, incompleteResults])
})

console.log(data)
