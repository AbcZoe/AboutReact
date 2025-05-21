import { useState } from "react";

function MyPanel({ value, onChange }) {
  const handleChange = (e) => {
    onChange(Number(e.target.value)); //  呼叫父元件的 setX 方法， 轉成數字 128（不是 "128"）
  };

  return (
    <>
      <input type="range" min="0" max="255" value={value} onChange={handleChange} />
      <span>{value}</span>
    </>
  );
}

export default MyPanel;