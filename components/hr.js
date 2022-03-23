import React from "react";

export const ColoredLine = ({ color }) => {
  return (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 2,
        width: 805,
        marginBottom: 10,
      }}
    />
  );
};
