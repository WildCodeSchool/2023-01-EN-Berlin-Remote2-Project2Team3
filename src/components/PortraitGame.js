import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import data from "./PortraitWrapper.js"; data={data[gameStage]}
import Question from "./Question.js";

const PortraitGame = () => {
  const [gameStage, setGameStage] = useState(0); //gameStage is a number, describing the number of questions already asked
  useEffect(() => {
    // Code here will run after *every* render
  });
  return (
    <>
      <h1>Here be points</h1>
      {gameStage < 10 ? (
        <Question stage={gameStage} setter={setGameStage}  />
      ) : (
        <h1>Here be results</h1>
      )}
    </>
  );
};

export default PortraitGame;
