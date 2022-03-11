const router = require('express').Router();
const { notes } = require('../develop/db/db.json')

router.get('/api/notes', (req, res) => {
    let results = notes;
    res.json(results);
})

router.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const notes = createNewNotes(req.body, notes);
    res.json(note);
});

module.exports = router;