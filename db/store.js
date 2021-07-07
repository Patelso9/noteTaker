// look up uuid (util.promisify)- use ID in database
const { v4: uuid } = require("uuid");
const fs = require("fs");
const path = require("path");

class Store {
    
    getNotes(note) {
        const {title, text} = note;
        
        if (!title || !text) {
            throw error("there are no notes")
        };

        note.get("/api/notes", (req, res) => {
            const existingNote = {
              //UUID generates unique id
              id: uuidv4(),
              title: req.body.title,
              text: req.body.text,
            }});
    };
    
    addNote(note) {
        const {title, text} = note;
        
        if (!title || !text) {
            throw error("notes need to have title and text")
        };

        note.post("/api/notes", (req, res) => {
            const newNote = {
              //UUID generates unique id
              id: uuidv4(),
              title: req.body.title,
              text: req.body.text,
            }});
    }

    // writeNotes();

    // deleteNotes();

}


module.exports = Store;

