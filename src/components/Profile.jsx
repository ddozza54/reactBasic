import React from "react";

export default function Profile({ image, name, title, isNew }) {
  return (
    <div className="profile">
      {isNew && <div className="newCrew">NEW</div>}
      <img className="photo" src={image}></img>
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
