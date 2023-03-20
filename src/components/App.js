import React from "react";
import Footer from "./Footer.js";
import Header from "./Header.js";
import PortraitGame from "./PortraitGame.js";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <PortraitGame />
      </main>
      <Footer />
    </>
  );
};

export default App;
