import React from "react";
import OperatorButton from "./OperatorButton";

const Operators = ({ operators, getValue }) => {
  return (
    <div className="operators">
      {operators.map((item, index) => (
        <OperatorButton key={index} value={item} getValue={getValue} />
      ))}
    </div>
  );
};

export default Operators;
