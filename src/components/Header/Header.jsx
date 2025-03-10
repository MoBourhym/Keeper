import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Profile from "./Profile/Profile";
import Action from "./action/Action";
function Header() {
  return (
    <div className="header">
      <Logo />
      <SearchBar />
      <Action />
      <Profile />
    </div>
  );
}

export default Header;
