import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  const [pointerX, setPointerX] = useState(0);
  const [pointerY, setPointerY] = useState(0);
  const mouseMove = (e) => {
    setPointerX(e.clientX);
    setPointerY(e.clientY);
  };
  return (
    <div className="container" onMouseMove={mouseMove}>
      <div
        className="pointer"
        style={{ transform: `translate(${pointerX}px, ${pointerY}px)` }}
      ></div>
    </div>
  );
}
