// MyDisplay.jsx
function MyDisplay({ input, result }) {
  return (
    <div className="display">
      <div className="input">{input || "0"}</div>
      <div className="result">{result !== null ? `= ${result}` : ""}</div>
    </div>
  );
}

export default MyDisplay;
