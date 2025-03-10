import React, { useState } from "react";

function NewNote() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click); 
    console.log(click);
  };

  return (

    (!click)?
   < div className="new-note-container input">
    <input
      className={`new-note-input ${click ? "active" : ""}`}
      type="text"
      placeholder="Create note..."
      onFocus={handleClick}
    />
    </div>:
    <div className="new-note-container-active"  >
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Create Note" />
      <div className="close-note-container">
      <button className="close-note" onClick={handleClick}>Close</button>
      </div>
    </div>
  );
}

export default NewNote;