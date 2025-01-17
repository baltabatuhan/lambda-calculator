import React from "react";

const NumberButton = ({ value, getValue }) => {
  return (
    <button
      className={value === "0" ? "son" : null}
      onClick={() => getValue(value)}
    >
      {value}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default NumberButton;
