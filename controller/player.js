const playerModel = require('../models/player')
const playerService = require('../services/player')

exports.insertPlayer = (req, res) => {
  const data = req.body
  console.log(data)
  playerModel.insert(data)
  res.status(200).json(data)
}

exports.getPlayer = (req, res) => {
  const id = parseInt(req.params.id)
  console.log('player id in controller', typeof id)
  playerModel.get(id).then(result => res.status(200).json(result))
}

exports.removePlayer = (req, res) => {
  const id = parseInt(req.params.id)
  console.log('removing player id', id)
  playerModel.remove(id).then(result => res.status(200).json(result))
}

exports.editPlayer = (req, res) => {
  const id = parseInt(req.params.id)
  const obj = req.body
  console.log('editing player id:', id, obj)
  playerModel.edit(id, obj).then(result => res.status(200).json(result))
}

exports.swapi = (req, res) => {
  playerService.pull(req.params.peopleNum)
    .then(result => res.status(200).json(result))
}
