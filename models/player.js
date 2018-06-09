const r = require('rethinkdbdash')()

exports.insert = (playerData) => {
  return r.db('restApi').table('player').insert(playerData).run().then(result => result)
}

exports.get = (id) => {
  return r.db('restApi').table('player').get(id).run().then(result => result)
}

exports.remove = (id) => {
  return r.db('restApi').table('player').get(id).delete('return_changes=True').run().then(result => result)
}

exports.edit = (id, obj) => {
  return r.db('restApi').table('player').get(id).update(obj).run().then(result => result)
}
