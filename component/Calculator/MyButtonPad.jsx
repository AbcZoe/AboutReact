// MyButtonPad.jsx
function MyButtonPad({ onClick, onClear, onEqual, onDecimal, onBackspace }) {
  const buttons = [
    "(", ")", "C", "⌫",
    "7", "8", "9", "÷",
    "4", "5", "6", "×",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
  ];

  return (
    <div className="button-pad">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => {
            if (btn === "C") onClear();
            else if (btn === "=") onEqual();
            else if (btn === ".") onDecimal();
            else if (btn === "⌫") onBackspace();
            else onClick(btn);
          }}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}

export default MyButtonPad;