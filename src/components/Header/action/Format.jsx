import React,{useContext} from "react";
import { FormatContext } from "../../../Context/FormatContext";



function Format() {
  const {format, toggleFormat} = useContext(FormatContext);
  const handleClick = () => {
    toggleFormat();
  };

  return (
    <button onClick={handleClick}>
      <span className="material-symbols-outlined">view_stream</span>
    </button>
  );
}

export default Format;
