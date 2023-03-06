//import the data from portrait wrapper!
import Question from "./Question.js";

const PortraitGame = () => {
  const [gameStage, setGameStage] = useState(0); //gameStage is a number, describing the number of questions already asked
  const [points, setPoints] = useState(0); //points is a number, describing the number of correctly answered questions
  return (
    <>
      <h1>Here be points</h1>
      {gameStage < 10 ? (
        <Question stage={gameStage} setter={setGameStage} data={data} />
      ) : (
        <h1>Here be results</h1>
      )}
    </>
  );
};

export default PortraitGame;
