import "./buttok.css";

function Buttons({ onAction }) {
  return (
    <div className="button-container">
      <button
        type="button"
        className="btn btn-increment"
        onClick={() => onAction("increment")}
      >
        <span>+</span> Increment
      </button>

      <button
        type="button"
        className="btn btn-decrement"
        onClick={() => onAction("decrement")}
      >
        <span>-</span> Decrement
      </button>

      <button
        type="button"
        className="btn btn-reset"
        onClick={() => onAction("reset")}
      >
        <span>↺</span> Reset
      </button>
    </div>
  );
}

export default Buttons;
