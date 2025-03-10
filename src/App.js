import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

import { ThemeContext } from "./Context/ThemeContext";
import { FormatProvider } from "./Context/FormatContext";
function App() {
  const { theme } = React.useContext(ThemeContext);
  return (

    <div className={theme=='light'?'body body-light':'body body-dark'} >
     <FormatProvider>
      <Header className="header" />
      <Body></Body>
      </FormatProvider>
    </div>
  );
}

export default App;
