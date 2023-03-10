import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import getData from "./PortraitWrapper.js";
import { digestTheData } from "./PortraitWrapper.js";
import Question from "./Question.js";

const PortraitGame = () => {
  const [gameStage, setGameStage] = useState(0); //gameStage is a number, representing the current question
  const [data, setData] = useState([[{fullName: "The database is loading", isCorrect: true}],[],[],[],[],[],[],[],[],[]]);
  useEffect(() => {
    (async function () {
      const rawData = await getData();
      console.log("data is imported");
      setData(digestTheData(rawData));
    })();
  }, [setData]);
  gameStage < 10 ? console.log(`Question ${gameStage + 1} out of 10`) : console.log("Game over");
  console.log(data[gameStage])
  return (
    <>
      <h1>Here be points</h1>
      {gameStage < 10 ? (
        <Question data={data[gameStage]} setGameStage={setGameStage}  />
      ) : (
        <h1>Here be results</h1>
      )}
    </>
  );
};

export default PortraitGame;
