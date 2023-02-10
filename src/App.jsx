import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Herox from "./Components/Herox";
import Actions from "./Components/Actions";
import Info from "./Components/Info";
import Testimonials from "./Components/Testimonials";
import Brands from "./Components/Brands";
import Projects from "./Components/Projects";
import Exp from "./Components/Exp";
import News from './Components/News';

function App() {
  const [change, setchange] = useState(false);
  return (
    <div className="">
      <Navbar />
      <Herox />
      <Actions />
      <Info />
      <Testimonials />
      <Brands />
      <Projects />
      <Exp />
      <News />
    </div>
  );
}

export default App;
