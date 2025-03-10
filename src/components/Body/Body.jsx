import React from "react";
import NewNote from "./NewNote/NewNote";
import SideBar from "./SideMenu/SideBar";
import Note from "./Notes/Note";
import { FormatContext } from "../../Context/FormatContext";
import { FormatProvider } from "../../Context/FormatContext";
function Body() {
  
const {format} = React.useContext(FormatContext);
  
  return (

    <div className="section" >
      <div>
        <SideBar />
      </div>
      
      <div className="notes">
      
          <NewNote />
 
        <div className={format?"format":""}>
          <Note />
        </div>
      
      </div>
    </div>
  );
}

export default Body;
