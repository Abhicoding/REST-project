const express = require('express')
const router = express.Router()
const playerCtrl = require('../controller/player')

router.get('/details/:id', playerCtrl.getPlayer)
router.post('/details', playerCtrl.insertPlayer)
router.delete('/details/:id', playerCtrl.removePlayer)
router.patch('/details/:id', playerCtrl.editPlayer)

router.get('/starwars/:peopleNum', playerCtrl.swapi)

module.exports = router
