import React from "react";

function SideBar() {
  return (
    <ul className="sidebar">
      <li>
        <span className="material-symbols-outlined">lightbulb</span>
      </li>
      <li>
        <span className="material-symbols-outlined">notifications</span>
      </li>
      <li>
        <span className="material-symbols-outlined">label</span>
      </li>
      <li>
        <span className="material-symbols-outlined">edit</span>
      </li>
      <li>
        <span className="material-symbols-outlined">archive</span>
      </li>
      <li>
        <span className="material-symbols-outlined">delete</span>
      </li>
    </ul>
  );
}

export default SideBar;
