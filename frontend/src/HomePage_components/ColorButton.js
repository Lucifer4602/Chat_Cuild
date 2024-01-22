import React from "react";
import './ColorButton.css'
import { Divider } from "@chakra-ui/react";
export const ColorButton = (Props) => {
  return (

      <button
      id="color_btn"
      style={{
        background: `${Props.color}`,
        fontSize: `${Props.fontSize}`,
      }}
      onClick={Props.onClick}
    >
      <h6>{Props.text}</h6>
      <div id="backgroundAppear"></div>
    </button>

  );
};
