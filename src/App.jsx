import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Herox from "./Components/Herox";
import Actions from "./Components/Actions";
import Info from "./Components/Info";

function App() {
  const [change, setchange] = useState(false);
  return (
    <div className="">
      <Navbar />
      <Herox />
      <Actions />
      <Info />
    </div>
  );
}

export default App;
