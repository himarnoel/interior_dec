import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Herox from "./Components/Herox";
import Actions from "./Components/Actions";

function App() {
  const [change, setchange] = useState(false);
  return (
    <div className="">
      <Navbar />
      <Herox />
      <Actions />
    </div>
  );
}

export default App;
