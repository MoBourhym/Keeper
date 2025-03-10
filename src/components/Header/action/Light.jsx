import React,{useContext} from "react";
import { ThemeContext } from "../../../Context/ThemeContext";


function Light() {
  const {Theme,toggleTheme } = useContext(ThemeContext);
const handleClick = () => {
    toggleTheme();
  };


  return (
    <button >
      <span className="material-symbols-outlined" onClick={handleClick}>wb_sunny</span>
    </button>
  );
}

export default Light;
