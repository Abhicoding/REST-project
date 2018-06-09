const playerModel = require('../models/player')
const playerService = require('../services/player')

exports.player = (req, res) => {
  const data = {
    id: 1234,
    name: 'Messi'
  }
  playerModel.insert(data)
  res.status(200).json(data)
}

exports.swapi = (req, res) => {
  playerService.pull(req.params.peopleNum)
    .then(result => res.status(200).json(result))
}
