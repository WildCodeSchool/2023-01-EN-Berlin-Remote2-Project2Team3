import React from "react";

const CharButton = ({ name, setGameStage, correct }) => {
  return (
    <div
      onClick={() => {
        setGameStage( gs => gs + 1 );
        correct ? console.log("correct answer!") : console.log("wrong answer!")
      }}
    >
      <h1>{name}</h1>
    </div>
  );
};

export default CharButton;
