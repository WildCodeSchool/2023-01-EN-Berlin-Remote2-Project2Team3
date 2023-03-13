import React from "react";
import CharButton from "./CharButton.js"

const Question = ({data, setGameStage}) => {
  return (
    <>
      <h1>Who is this?</h1>
      <h1>Here be the picture</h1>
      <img src = {data.filter(character => character.isCorrect)[0].imageUrl} />
      {data.map((character) => (
        <CharButton name={character.fullName} setGameStage={setGameStage} correct={character.isCorrect} />
      ))}
    </>
  );
};

export default Question;