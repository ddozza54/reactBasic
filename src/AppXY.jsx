import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [pointer, setPointer] = useState((0, 0));
  const mouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    console.log(mouseX, mouseY);
    setPointer(mouseX, mouseY);
  };
  return (
    <div className="container" onMouseMove={mouseMove}>
      <div className="pointer"></div>
    </div>
  );
}
