import React from "react";
import "./cards.scss";

export default function Cards({
  image,
  title,
  description,
  backgroundColor = "#4d4381",
}) {
  return (
    <div className="container-background">
      <div className="background" style={{ backgroundColor }}>
        <img src={image} alt="" className="image" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
