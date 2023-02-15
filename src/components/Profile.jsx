import React from "react";

export default function Profile({ image, name, title, newCrew }) {
  return (
    <div className="profile">
      <span>New</span>

      <img className="photo" src={image}></img>
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
