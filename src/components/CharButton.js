import React from "react";

const CharButton = ({ name, setGameStage, correct }) => {
  return (
    <div
      onClick={() => {
        setGameStage( gs => {return correct? {...gs, question: gs.question + 1, points: gs.points + 1} : {...gs, question: gs.question + 1}});
        correct ? console.log("correct answer!") : console.log("wrong answer!")
      }}
    >
      <h1>{name}</h1>
    </div>
  );
};

export default CharButton;
