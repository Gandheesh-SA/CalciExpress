import React from "react";
import "../styles/header.css";

export default function Header({title, para}) {
  return (
    <header className="header">
      <div className="header-box">
        <h1>{title}</h1>
        <p>{para}</p>
      </div>
    </header>
  );
}
