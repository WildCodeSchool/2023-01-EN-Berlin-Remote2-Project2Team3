const getData = async () => {
  const response = await fetch("https://thronesapi.com/api/v2/Characters", {
    method: "GET",
  })
  const arr = await response.json();
  
  return arr;
};

export default getData;

/* API DESCRIPTION

CharacterModel{
  
    id	integer($int32)
    A unique number that identifies this character.
    
    firstName	string
    nullable: true
    The character's first name.
    
    lastName	string
    nullable: true
    The character's last name.

    fullName	string
    nullable: true
    The First + Last name of the character.
    
    title	string
    nullable: true
    The character's formal title.
    
    family	string
    nullable: true
    The character's family name.
    
    image	string
    nullable: true
    The character's picture filename
    
    imageUrl	string
    nullable: true
    The character's picture url
    }

*/

export const digestTheData = (data) => {
  const typoFixes = [
    ["Jamie", "Jaime"],
    ["Cateyln", "Catelyn"],
    ["Ramsey", "Ramsay"],
  ]; //array of arrays of strings

  const fixData = (char) => {
    typoFixes.forEach((pair) =>
    char.firstName === pair[0] ? (char.firstName = pair[1]) : null
    );
    typoFixes.forEach((pair) =>
    char.fullName.includes(pair[0])
    ? char.fullName.replace(pair[0], pair[1])
        : null
        );
        return char;
  };
  
  const fixedData = data.map(fixData);

  const getRandomNumber = (maximum) => Math.floor(Math.random() * maximum);
  //maximum is unreachable (Math.floor!)

  const getNRandomNumbers = (maximum, howMany) => {
    if (howMany <= maximum) {
      let result = new Set();
      while (result.size < howMany) result.add(getRandomNumber(maximum));
      return [...result];
    } else {
      console.error("PortraitWrapper - getNRandomNumbers - infinite loop");
    }
  };

  const shuffleArr = (arr) => {
    const order = getNRandomNumbers(arr.length, arr.length);
    return order.map((element) => arr[element]);
  };

  const shuffledData = shuffleArr(fixedData);
  
  const maxAnswers = Math.floor(shuffledData.length / 10); //number (integer)
  // 10 is the number of questions per game

  const portraitData = [];
  while (shuffledData.length >= maxAnswers) {
    portraitData.push(shuffledData.splice(0, maxAnswers));
  }
  portraitData.forEach((question) => {
    question[getRandomNumber(question.length)].isCorrect = true;
  });
  return portraitData;
};