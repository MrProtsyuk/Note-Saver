const fs = require('fs');
const path = require('path');

function createNewNote(body, notes) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../develop/db/notes.json'),
      JSON.stringify({ notes }, null, 2)
    );
    return note;
  }

function findById(id, notes) {
  const result = notes.filter(note => note.id === id)[0];
  return result;
}

module.exports = {
    createNewNote,
    findById
  };