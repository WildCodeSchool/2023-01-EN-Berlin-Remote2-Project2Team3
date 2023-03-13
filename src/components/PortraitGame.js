import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import getData from "./PortraitWrapper.js";
import { digestTheData } from "./PortraitWrapper.js";
import Question from "./Question.js";

const PortraitGame = () => {
  const [gameStage, setGameStage] = useState({question: 0, points: 0}); //gameStage is an object with 2 properties, each holding a numeric value
  const [data, setData] = useState([[{fullName: "The database is loading", isCorrect: true}],[],[],[],[],[],[],[],[],[]]);
  useEffect(() => {
    (async function () {
      const rawData = await getData();
      console.log("data is imported");
      setData(digestTheData(rawData));
    })();
  }, [setData]);
  gameStage.question < 10 ? console.log(`Question ${gameStage.question + 1} out of 10, Points: ${gameStage.points}`) : console.log("Game over");
  return (
    <>
      <h1>{gameStage.points} points</h1>
      {gameStage.question < 10 ? (
        <Question data={data[gameStage.question]} setGameStage={setGameStage}  />
      ) : (
        <h1>{`${gameStage.points} out of 10`}</h1>
      )}
    </>
  );
};

export default PortraitGame;
