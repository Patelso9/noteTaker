const router = require('express').Router();
const store = require('../db/store.js');
// const index = require('../public/assets/js/index');

// create a route that respondes with all notes coming from the database

router.get('/api/notes', (req, res) => {
    store.getNotes()
    .then((notes) => {
        return res.json(notes)
    })
    .catch((err) => res.status(500).json(err))
})



// localhost:/3000/api/notes



module.exports = router;