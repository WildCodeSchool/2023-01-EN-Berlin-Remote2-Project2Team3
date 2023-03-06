import CharButton from "./CharButton.js"
const Question = () => {
  return (
    <>
      <h1>Who is this?</h1>
      <h1>Here be the picture</h1>
      {dataArray.map((character) => (
        <CharButton charName={character.fullName} />
      ))}
    </>
  );
};

export default Question;