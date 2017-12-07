const folder = './data/';
const fs = require('fs');

function rawCount() {
  let data = []

  fs.readdirSync(folder).forEach(file => {
    let json = fs.readFileSync(`./data/${file}`)
    let obj = JSON.parse(json)
    let date = file.split('.')[0]
    let incompleteResults = obj.incomplete_results
    let totalCount = obj.total_count

    if (!incompleteResults) {
      console.log(`WARNING ${file} results are incomplete`)
    }

    data.push([ date, totalCount ])
  })

  console.log('RAW COUNT', data)
}

function orgCount() {
  let data = []

  fs.readdirSync(folder).forEach(file => {
    let json = fs.readFileSync(`./data/${file}`)
    let obj = JSON.parse(json)
    let date = file.split('.')[0]
    let incompleteResults = obj.incomplete_results
    let repos = obj.items

    if (!incompleteResults) {
      console.log(`WARNING ${file} results are incomplete`)
    }

    totalOrgCount = countReposForOrgs(repos)

    data.push([ date, totalOrgCount ])
  })

  console.log('ORGANIZATION COUNT', data)
}

function countReposForOrgs(repos) {
  let counter = 0;
  repos.forEach(function(repo) {
    if (repo.owner.type === "Organization") {
      counter += 1
    }
  })
  return counter
}

// rawCount()
orgCount()
