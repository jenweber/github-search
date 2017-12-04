const requestData = require('./request-data')
const moment = require('moment')

const startingMonth = '2015-01'
const endingMonth = '2017-11'


function fetchFiles() {
  // months are zero indexed!!! wtf
  let start = moment(startingMonth, "YYYY-MM")
  let endExcluding = moment(endingMonth, "YYYY-MM")
  let current = start
  while (current !== endExcluding) {
    console.log('current', current)
    console.log('end', endExcluding)
    let query = calcDateRange(current)
    requestData(query)
    current = current.add(1, 'months')
  }
}

function calcDateRange(momentDate) {
  let daysInMonth = momentDate.daysInMonth()
  let month = momentDate.month()
  let year = momentDate.year()
  let start = `${year}-${month}-01`
  let end = `${year}-${month}-${daysInMonth}`
  return `${start}..${end}`
}

fetchFiles()
