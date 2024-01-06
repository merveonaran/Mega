import React from "react";

const Buttons = (props) => {
  return (
    <div>
      <button class="btn" onClick={props.onclickF}>Convert to Fahrenheit</button>
      <button class="btn" onClick={props.onclickK}>Convert to Kelvin</button>
    </div>
  );
};

export default Buttons;
