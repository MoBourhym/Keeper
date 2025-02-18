import React from "react";
import NewNote from "./NewNote/NewNote";
import SideBar from "./SideMenu/SideBar";
import Note from "./Notes/Note";

function Body() {
  return (
    <div className="body">
      <div>
        <SideBar />
      </div>
      <div className="notes">
        <div className="new-note-container">
          <NewNote />
        </div>
        <div className=".notes-container ">
          <Note />
        </div>
      </div>
    </div>
  );
}

export default Body;
