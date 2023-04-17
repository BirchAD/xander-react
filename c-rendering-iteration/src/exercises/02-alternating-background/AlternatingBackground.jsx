import React, { useState } from "react";

const AlternatingBackground = () => {
  const [clickValue, setclickValue] = useState(1);

  const clickChange = (val) => {
    setclickValue(val);
  };

  let className = "big-background";
  if (clickValue === 2) {
    className += " alternative-bg-2";
  } else if (clickValue === 3) {
    className += " alternative-bg-3";
  }

  return (
    <div className={className}>
      <h1>Alternate my background!</h1>
      <h2>The value is {clickValue}</h2>
      <button onClick={() => clickChange(1)}>Set Value to 1</button>
      <button onClick={() => clickChange(2)}>Set Value to 2</button>
      <button onClick={() => clickChange(3)}>Set Value to 3</button>
    </div>
  );
};

export default AlternatingBackground;
