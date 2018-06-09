const r = require('rethinkdbdash')()

exports.insert = (playerData) => {
  r.db('restApi').table('player').insert(playerData).run().then(function (result) {
    console.log('result is ', result)
  })
}

exports.get = (id) => {
  return r.db('restApi').table('player').get(id).run().then(result => {
    console.log('got: ', result)
    return result
  })
}

exports.remove = (id) => {
  return r.db('restApi').table('player').get(id).delete('return_changes=True').run()
}
