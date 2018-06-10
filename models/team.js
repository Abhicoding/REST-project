const r = require('rethinkdbdash')()

exports.get = (id) => {
  return r.db('restApi').table('team').get(id).run()
    .then(result => result)
}

exports.insert = (data) => {
  return r.db('restApi').table('team').insert(data).run()
    .then(result => result)
}

exports.edit = (id, obj) => {
  return r.db('restApi').table('team').get(id).update(obj).run()
    .then(result => result)
}

exports.delete = (id) => {
  return r.db('restApi').table('team').delete(id).run()
    .then(result => result)
}
