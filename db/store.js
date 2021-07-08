const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const util = require("util");
// const db = require('./db.json');

const readNotes = util.promisify(fs.readFile);
const postNotes = util.promisify(fs.writeFile);

class Store {
    
    readAll(){
        console.log('read all function')
        return readNotes( './db/db.json',  'utf8')
    };
    
    
    getNotes () {
        console.log('store get /notes')
        return this.readAll()
        .then((notes) => {
            let parsedNotes
            try {parsedNotes = [].concat(JSON.parse(notes))}
            catch (err) {
                console.log("there are no notes", err);
            }
            return parsedNotes;    
            
        })};
        
        writeNotes(note){
            console.log('writeNotes function')
            return postNotes( './db/db.json', JSON.stringify(note))
        };
        
        saveNote(note) {
            const { title, text } = note;
            const newNote = { title, text, id: uuidv4() }
            
            console.log('store post /notes', newNote)
            return this.getNotes()
            .then((notes) => [ ...notes, newNote ])
            .then((newNotes) => this.writeNotes(newNotes))
            .then(() => newNote)
        }
        
        
        // deleteNotes();
        
        
        
}

module.exports = new Store();

// ------------------- STARTER CODE ------------------------//

// look up uuid (util.promisify)- use ID in database

// getNotes() {
//     return read().then {
//         // parse notes to return them as parsed notes
//     }
// }

