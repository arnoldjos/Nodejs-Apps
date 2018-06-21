console.log('Starting app.js');

const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes');

const options = {
    title: {
        describe: 'Title of note',
        demand: true,
        alias: 't'
    },
    body: {
        describe: 'Body of the note',
        demand: true,
        alias: 'b'
    }
}

const argv = yargs
    .command('add', 'Add a new note', {
        title: options.title,
        body: options.body
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: options.title
    })
    .command('remove', 'Remove a note' , {
        title: options.title
    })
    .help()
    .argv;
var command = argv._[0];
// console.log('Command: ', command);
// // console.log('Process: ', process.argv);
//  //console.log('Yargs: ', argv);

if (command === 'add') {
    const note = notes.addNote(argv.title, argv.body);
    notes.logNote(note);

} else if (command === 'list') {
    const allNotes = notes.getAll();

    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach(note => notes.logNote(note));
} else if (command === 'read') {
    const note = notes.readNote(argv.title);

    notes.logNote(note);

} else if (command === 'remove') {
    const noteRemoved = notes.removeNote(argv.title);
    const message = noteRemoved ? `Title: ${argv.title} has been removed` : 'Note not found'
    console.log(message);
} else {
    console.log('Command not found');
}

