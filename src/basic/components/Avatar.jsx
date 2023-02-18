import React from "react";

export default function Avatar({ image, isNew }) {
  return (
    <div className="avatar">
      {isNew && <div className="newCrew">NEW</div>}
      <img className="photo" src={image}></img>
    </div>
  );
}
