const fetch = require('node-fetch')

exports.pull = (peopleNum) => {
  return fetch('https://swapi.co/api/people/' + peopleNum)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      return data
    })
}
