const requestData = require('./request-data')
const moment = require('moment')

const startingMonth = '2015-01'
const endingMonth = '2015-02'


const user = process.argv[2]
if (!user) {
  console.error('ERROR: to run this script, you must provide your GitHub username as an argument, i.e. "node get-past-three-years yourname"')
  return
}

function fetchFiles() {
  // months are zero indexed!!! wtf
  let start = moment(startingMonth, "YYYY-MM")
  let endExcluding = moment(endingMonth, "YYYY-MM").add(1, 'months')
  let current = start
  let counter = 0

  function timerLoop() {
    if (current.format('YYYY-MM') === endExcluding.format('YYYY-MM')) {
      return
    } else {
      let query = calcDateRange(current)
      requestData(query, user)
      current = current.add(1, 'months')
      counter += 1
      setTimeout(timerLoop, 7000 );
    }
  }
  timerLoop();
}

function calcDateRange(momentDate) {
  let daysInMonth = momentDate.daysInMonth()
  let month = momentDate.month() + 1
  month = month < 10 ? '0' + String(month) : month
  let year = momentDate.year()
  let start = `${year}-${month}-01`
  let end = `${year}-${month}-${daysInMonth}`
  return `${start}..${end}`
}

fetchFiles()
