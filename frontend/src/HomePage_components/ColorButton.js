import React from "react";
// import Color from "../assets/colors";
export const ColorButton = (Props) => {
  return (
    <button
      id="color_btn"
      style={{
        background: `${Props.color}`,
        borderRadius: "8px",
        padding: "3px 5px",
        fontSize: "10px",
        margin: "5px 3px",
        border: "0px",
      }}
    >
      {Props.text}
    </button>
  );
};
