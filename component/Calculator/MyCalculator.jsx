// MyCalculator.jsx
import { useState } from "react";
import MyDisplay from "./MyDisplay";
import MyButtonPad from "./MyButtonPad";
import "./MyCalculator.css";

function MyCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleClick = (value) => {
    if (value === "(") {
      // 自動補上對應的右括號，但保留只顯示左括號，右括號由使用者補上或於結尾時加入
      const lastChar = input.slice(-1);
      if (/[0-9)]/.test(lastChar)) {
        setInput((prev) => prev + "×(");
      } else {
        setInput((prev) => prev + "(");
      }
    } else if (value === ")") {
      // 只有在開括號數大於閉括號時才允許加入閉括號
      const openCount = (input.match(/\(/g) || []).length;
      const closeCount = (input.match(/\)/g) || []).length;
      if (openCount > closeCount) {
        setInput((prev) => prev + ")");
      }
    } else if (/^[+\-×÷]/.test(value) && input === "") return;
    else if (/^[+\-×÷]/.test(value) && /[+\-×÷]$/.test(input)) {
      setInput((prev) => prev.slice(0, -1) + value);
    } else {
      setInput((prev) => prev + value);
    }
  };

  const handleClear = () => {
    setInput("");
    setResult(null);
  };

  const handleEqual = () => {
    try {
      const expression = input.replace(/×/g, "*").replace(/÷/g, "/");
      const evalResult = eval(expression);
      setResult(evalResult);
    } catch {
      setResult("錯誤");
    }
  };

  const handleDecimal = () => {
    const parts = input.split(/[+\-×÷]/);
    const last = parts[parts.length - 1];
    if (!last.includes(".")) {
      setInput((prev) => prev + ".");
    }
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleKeyDown = (e) => {
    const key = e.key;
    if (!isNaN(key)) handleClick(key);
    else if (["+", "-", "*", "/"].includes(key)) {
      const map = {"*": "×", "/": "÷"};
      handleClick(map[key] || key);
    }
    else if (key === "Enter") handleEqual();
    else if (key === "Backspace") handleBackspace();
    else if (key === ".") handleDecimal();
    else if (key === "c" || key === "C") handleClear();
    else if (key === "(" || key === ")") handleClick(key);
  };

  return (
    <div
      className="calculator"
      tabIndex="0"
      onKeyDown={handleKeyDown}
    >
      <MyDisplay input={input} result={result} />
      <MyButtonPad
        onClick={handleClick}
        onClear={handleClear}
        onEqual={handleEqual}
        onDecimal={handleDecimal}
        onBackspace={handleBackspace}
      />
    </div>
  );
}

export default MyCalculator;