import React from "react";
import CharButton from "./CharButton.js";

const Question = ({ data, setGameStage }) => {
  return (
    <>
      <h1>Who is this?</h1>
      <div
        onClick={() => {
          setGameStage((gs) => ({ ...gs, question: gs.question + 1 }));
          console.log("question skipped");
        }}
      >
        <h3>Skip question</h3>
      </div>
      <img src={data.filter((character) => character.isCorrect)[0].imageUrl} />
      {data.map((character) => (
        <CharButton
          key={character.id.toString()}
          name={character.fullName}
          setGameStage={setGameStage}
          correct={character.isCorrect}
        />
      ))}
    </>
  );
};

export default Question;
