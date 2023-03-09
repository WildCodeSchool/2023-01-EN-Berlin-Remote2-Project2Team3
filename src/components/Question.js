import React from "react";
import CharButton from "./CharButton.js"

const Question = ({data}) => {
  return (
    <>
      <h1>Who is this?</h1>
      <h1>Here be the picture</h1>
      {data.map((character) => (
        <CharButton charName={character.fullName} />
      ))}
    </>
  );
};

export default Question;