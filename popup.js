document.addEventListener('DOMContentLoaded', function() {
  var noteInput = document.getElementById('noteInput');
  var saveButton = document.getElementById('saveButton');
  var clearButton = document.getElementById('clearButton');
  var noteList = document.getElementById('noteList');

  // Load saved notes from localStorage
  var savedNotes = JSON.parse(localStorage.getItem('quickNote')) || [];

  // Display saved notes
  savedNotes.forEach(function(note) {
    displayNote(note);
  });

  // Save note
  saveButton.addEventListener('click', function() {
    var noteText = noteInput.value.trim();
    if (noteText !== '') {
      var note = {
        text: noteText,
        timestamp: new Date().toLocaleString()
      };
      savedNotes.push(note);
      localStorage.setItem('quickNote', JSON.stringify(savedNotes));
      displayNote(note);
      noteInput.value = '';
    }
  });

  // Clear notes
  clearButton.addEventListener('click', function() {
    localStorage.removeItem('quickNote');
    savedNotes = [];
    noteList.innerHTML = '';
  });

  // Display note
  function displayNote(note) {
    var li = document.createElement('li');
    li.classList.add('noteItem');
    li.textContent = note.text + ' - ' + note.timestamp;
    noteList.appendChild(li);
  }
});
