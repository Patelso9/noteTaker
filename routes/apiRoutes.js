const router = require('express').Router();
const store = require('../db/store');
// const index = require('../public/assets/js/index');

// create a route that respondes with all notes coming from the database

   router.get('/notes', (req, res) => {
    store.getNotes()
    .then((notes) => {
        console.log('api routes get /notes', notes)
        res.json(notes)
    })
    .catch((err) => res.status(500).json(err))
})
    
    router.post('/notes', (req, res) => {
        store.addNote(req.body)
        .then((notes) => {
            console.log('api routes post /notes', notes)
            res.json(notes)
        })
        .catch((err) => res.status(500).json(err))
    })







// localhost:/3000/api/notes

module.exports = router;


// ------------------- STARTER CODE ------------------------//




// localhost:/3000/api/notes









