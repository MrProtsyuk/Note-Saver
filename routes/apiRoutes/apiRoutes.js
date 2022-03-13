const router = require('express').Router();
const { notes } = require('../../develop/db/notes.json')
const { createNewNote } = require('../../lib/notes')

router.get('/notes', (req, res) => {
    res.json(notes);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const notes = createNewNote(req.body, notes);
    res.json(note);
});

module.exports = router;