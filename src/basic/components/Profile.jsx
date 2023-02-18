import React from "react";
import Avatar from "./Avatar";

export default function Profile({ name, title, isNew, image }) {
  return (
    <div className="profile">
      <Avatar isNew={isNew} image={image} />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
