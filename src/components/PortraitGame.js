import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import getData from "../api/PortraitWrapper";
import { digestTheData } from "../api/PortraitWrapper";
import CharButton from "./CharButton";
import Question from "./Question.js";

const PortraitGame = () => {
  const [gameStage, setGameStage] = useState({ question: 0, points: 0 }); //gameStage is an object with 2 properties, each holding a numeric value
  const [data, setData] = useState([
    [{ id: 1, fullName: "The database is loading", isCorrect: true }],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]);
  useEffect(() => {
    (async function () {
      const rawData = await getData();
      setData(digestTheData(rawData));
    })();
  }, []);
  return (
    <div className="portrait-game">
      <h3 className="points">{gameStage.points} points</h3>
      {gameStage.question < 10 ? (
        <Question data={data[gameStage.question]} setGameStage={setGameStage} />
      ) : (
        <>
          <h1 className="results">{`${gameStage.points} points out of 10`}</h1>
          <button
            onClick={() => {
              setGameStage({ question: 0, points: 0 });
            }}
          >
            Play again
          </button>
        </>
      )}
    </div>
  );
};

export default PortraitGame;
