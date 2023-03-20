const getData = async () => {
  const response = await fetch("https://thronesapi.com/api/v2/Characters", {
    method: "GET",
  });
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
    ["Rob ", "Robb "],
  ]; //array of arrays of strings

  const fixData = (char) => {
    char.isCorrect = false;
    typoFixes.forEach((pair) => {
      char.fullName.includes(pair[0])
        ? (char.fullName = char.fullName.replace(pair[0], pair[1]))
        : null;
    });
    return char;
  };

  const fixedData = data.map(fixData).filter(char => char.id !== 34);
  console.log(fixedData[1])

  //Fisher-Yates shuffle
  const shuffle = (array) => {
    let curId = array.length;
    while (0 !== curId) {
      let randId = Math.floor(Math.random() * curId);
      curId -= 1;
      let tmp = array[curId];
      array[curId] = array[randId];
      array[randId] = tmp;
    }
    return array;
  };

  const shuffledData = shuffle(fixedData);

  const maxAnswers = Math.floor(shuffledData.length / 10); //number (integer)
  // 10 is the number of questions per game

  const portraitData = [];
  while (shuffledData.length >= maxAnswers) {
    portraitData.push(shuffledData.splice(0, maxAnswers));
  }

  const getRandomNumber = (under) => Math.floor(Math.random() * under);
  portraitData.forEach((question) => {
    question[getRandomNumber(question.length)].isCorrect = true;
  });

  return portraitData;
};
