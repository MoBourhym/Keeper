import React from "react";

function diplayHey(){
  console.log("Hey");
}


function SearchBar() {
  return <input className="search-bar" type="text" placeholder="Search.." onClick={diplayHey}/>;
}

export default SearchBar;
