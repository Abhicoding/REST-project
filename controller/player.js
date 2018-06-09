const playerModel = require('../models/player')
const playerService = require('../services/player')

exports.insertPlayer = (req, res) => {
  const data = req.body
  console.log(data)
  playerModel.insert(data)
  res.status(200).json(data)
}

exports.getPlayer = (req, res) => {
  const id = req.params.id
  console.log('player id in controller', id)
  playerModel.get(id).then(result => res.status(200).json(result))
}

exports.removePlayer = (req, res) => {
  const id = req.params.id
  console.log('removing player id', id)
  playerModel.remove(id).then(result => res.status(200).json(result))
}

exports.swapi = (req, res) => {
  playerService.pull(req.params.peopleNum)
    .then(result => res.status(200).json(result))
}
