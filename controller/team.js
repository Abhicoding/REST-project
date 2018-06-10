const teamModel = require('../models/team')

exports.insertTeam = (req, res) => {
  let data = req.body
  teamModel.insert(data)
    .then(result => res.status(200).json(result))
}

exports.getTeam = (req, res) => {
  let id = req.params.id
  teamModel.get(id)
    .then(result => res.status(200).json(result))
}

exports.editTeam = (req, res) => {
  let id = req.params.id
  let obj = req.body
  teamModel.edit(id, obj).then(result => res.json(200).json(result))
}

exports.removeTeam = (req, res) => {
  let id = req.params.id
  teamModel.remove(id).then(result => res.status(200).send(result))
}
