const router = require('express').Router();
const store = require('../db/store');
// const index = require('../public/assets/js/index');

// localhost:/3000/api/notes

   router.get('/notes', (req, res) => {
    store.getNotes()
    .then((notes) => {
        console.log('api routes get /notes', notes)
        return res.json(notes)
    })
    .catch((err) => res.status(500).json(err))
})
    
    router.post('/notes', (req, res) => {
        store.saveNote(req.body)
        .then((noteNew) => {
            console.log('api routes post /notes', noteNew)
            return res.json(noteNew)
        })
        .catch((err) => res.status(500).json(err))
    })
    
    
    router.delete('/notes/:id', (req, res) => {
        store.deleteNotes(req.params.id)
        .then(() => {
            console.log('api routes delete /notes/:id')
            return res.json({ ok: true })
        })
        .catch((err) => res.status(500).json(err))
    })

module.exports = router;


// ------------------- STARTER CODE ------------------------//

// create a route that respondes with all notes coming from the database
// localhost:/3000/api/notes









