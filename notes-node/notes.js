
const fs = require('fs');
const _ = require('lodash');

const fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (error) {
        console.log("File not found");
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };

    let duplicateNotes = notes.filter( note => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

const getAll = () => {
    return fetchNotes();
};

const readNote = (title) => {
    let notes = fetchNotes();
    let readNote = notes.find(note => note.title === title);
    return readNote;
};

const removeNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter(note => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

const logNote = (note) => {
    debugger;
    if (note) {
        console.log('Note created');
        console.log('-----');
        console.log(`Title: ${note.title}`);
        console.log(`Content: ${note.body}`);
    } else {
        console.log('Title already exists');
    }
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote,
    logNote
};