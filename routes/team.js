const express = require('express')
const router = express.Router()
const teamCtrl = require('../controller/team')

router.get('/details/:id', teamCtrl.getTeam)
router.post('/details', teamCtrl.insertTeam)
router.patch('/details/:id', teamCtrl.editTeam)
router.delete('/details/:id', teamCtrl.removeTeam)

module.exports = router
