// look up uuid (util.promisify)- use ID in database
const fs = require("fs");
const path = require("path");
const ( v4: uuidv4 ) = require("uuid");

// const util = require("util");
// const db = require('db.json');

const readNotes = util.promisify(fs.readfile);

class Store {

    getNotes () {
        readNotes('db.json', { encoding: 'utf8' })
        .then(notes => {
            return JSON.parse(notes)
        })
        .catch(err => {
            console.log("there are no notes", err)
        })
    };
    
    // addNote(note) {
    //     const {title, text} = note;
        
    //     if (!title || !text) {
    //         throw error("notes need to have title and text")
    //     };

    //     note.post("/api/notes", (req, res) => {
    //         const newNote = {
    //           //UUID generates unique id
    //           id: uuidv4(),
    //           title: req.body.title,
    //           text: req.body.text,
    //         }});
    // }

    // writeNotes();

    // deleteNotes();

    
}

module.export = new Store;

// ------------------- STARTER CODE ------------------------//

// getNotes() {
//     return read().then {
//         // parse notes to return them as parsed notes
//     }
// }

