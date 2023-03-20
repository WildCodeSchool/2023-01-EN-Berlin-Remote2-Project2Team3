import React from "react";

const CharButton = ({ name, setGameStage, correct }) => {
  return (
    <button
      className="char-button"
      onClick={() => {
        setGameStage((gs) => {
          return correct
            ? { ...gs, question: gs.question + 1, points: gs.points + 1 }
            : { ...gs, question: gs.question + 1 };
        });
      }}
    >
      {name}
    </button>
  );
};

export default CharButton;
