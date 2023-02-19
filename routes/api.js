const express = require('express')
const router = express.Router()
const noteActions = require('../controllers/notes')

// router.get('/', noteActions.saveNote)

router.get('/api/notes', noteActions.getAllNotes)
router.get('/api/notes/:id', noteActions.getNote)
router.post('/api/notes', noteActions.saveNote)
// router.put('/notes/:id', noteActions.updateNote)
router.delete('/notes/:id', noteActions.deleteNote)

module.exports = router