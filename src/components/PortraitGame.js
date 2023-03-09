import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import getData from "./PortraitWrapper.js";
import Question from "./Question.js";

const PortraitGame = () => {
  const [gameStage, setGameStage] = useState(0); //gameStage is a number, describing the number of questions already asked
  const [data, setData] = useState([]);

  useEffect(() => {
    (async function () {
      setData(await getData());
    })();
  });
  return (
    <>
      <h1>Here be points</h1>
      {gameStage < 10 ? (
        <Question data={data} stage={gameStage} setter={setGameStage}  />
      ) : (
        <h1>Here be results</h1>
      )}
    </>
  );
};

export default PortraitGame;
