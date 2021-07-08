const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const util = require("util");
// const db = require('./db.json');

const readNotes = util.promisify(fs.readFile);
const postNotes = util.promisify(fs.readFile);

class Store {
    
    readAll(){
        console.log('read all function')
        return readNotes( './db/db.json',  'utf8')
    };
    
    writeNotes(notes){
        console.log('writeNotes function')
        return postNotes( './db/db.json', JSON.stringify(notes))
    };
    
    // deleteNotes();


    getNotes () {
        console.log('api routes get /notes')
        return this.readAll()
        .then((notes) => {
            let parsedNotes
            try {parsedNotes = [].concat(JSON.parse(notes))}
         catch (err) {
            console.log("there are no notes", err);
        }
        return parsedNotes;    
    
    })};
    
    addNote(notes) {
        const { title, text } = notes;
        const newNote = { title, text, id: uuidv4() }

        console.log('api routes post /notes', newNote)
        return this.getNotes()
        .then((notes) => [ ...notes, newNote ])
        .then((anotherNote) => this.writeNotes(anotherNote))
        .then(() => newNote)
    }


    
}

module.exports = new Store();

// ------------------- STARTER CODE ------------------------//

// look up uuid (util.promisify)- use ID in database

// getNotes() {
//     return read().then {
//         // parse notes to return them as parsed notes
//     }
// }

