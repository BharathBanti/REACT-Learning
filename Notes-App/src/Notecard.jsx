export default function NoteCard({ id, title, description, handleDeleteNote }) {
  
  function onDelete(){
    handleDeleteNote(id);
  }

  return (
    <div className="note-card">
      <h2 className="note-title">{title}</h2>
      <p className="note-description">{description}</p>
      <div className="note-actions">
        <button className="action-btn action-edit">Edit</button>
        <button className="action-btn action-delete" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}
