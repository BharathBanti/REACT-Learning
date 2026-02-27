import { useState } from 'react';
import './App.css';
import Topbar from './Topbar';
import NoteCard from './Notecard';

function App() {
  const [noteList, setNoteList] = useState([]);

  function handleAddNote({ title, description }) {
    if (!title.trim() && !description.trim()) {
      return;
    }

    const newNoteObject = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
    };
    setNoteList((prevNotes) => [...prevNotes, newNoteObject]);
  }

  function handleDeleteNote(id){
    setNoteList((previous) => previous.filter(note => note.id !== id));
  }

  return (
    <main className="app-shell">
      <section className="app-panel">
        <h1 className="app-title">Notes Studio</h1>
        <Topbar handleAddNote={handleAddNote} />
        {noteList.length === 0 ? (
          <div className='empty-notes'>
            <p>No notes yet..!</p>
          </div>
        ) : (
          <ul className="notes-grid">
            {noteList.map((note) => {
              return (
                <li key={note.id} className="notes-item">
                  <NoteCard id={note.id} title={note.title} description={note.description} handleDeleteNote={handleDeleteNote} />
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
}

export default App;
