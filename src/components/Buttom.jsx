function Buttom({ index, onToggle, onDelete }) {
  return (
    <div className="button-group">
      <button
        type="button"
        className="btn-done"
        onClick={() => onToggle(index)}
      >
        ✔️
      </button>
      <button
        type="button"
        className="btn-delete"
        onClick={() => onDelete(index)}
      >
        🗑️
      </button>
    </div>
  );
}

export default Buttom;
