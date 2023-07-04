import React from "react";

const NavBar = ({ items }) => {
  return (
    <ul className="nav">
      {items.map((item) => (
        <li className="scale">{item}</li>
      ))}
    </ul>
  );
};

export default NavBar;
