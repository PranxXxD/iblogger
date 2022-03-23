import React from "react";

export const ColoredLine = ({ color }) => {
  return (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 2,
        width: 700,
        marginBottom: 10,
      }}
    />
  );
};
