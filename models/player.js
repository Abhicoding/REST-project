const r = require('rethinkdbdash')()

exports.insert = (playerData) => {
  r.db('restApi').table('player').insert(playerData).run().then(function (result) {
    console.log('result is ', result)
  })
}
