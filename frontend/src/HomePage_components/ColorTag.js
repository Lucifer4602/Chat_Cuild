import React from "react";

const ColorTag = (Props) => {
  return (
    <span
      className="color_tags"
      style={{
        background: `${Props.color}`,
        borderRadius: "8px",
        padding: "3px 5px",
        fontSize: "8px",
        margin: "5px 3px",
      }}
    >
      {Props.text}
    </span>
  );
};

export default ColorTag;
