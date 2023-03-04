let myResponse = await fetch("https://thronesapi.com/api/v2/Characters", {
  method: "GET",
}); //Response object

let data = await myResponse.json(); //array of objects

export default data;

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

const getRandomNumber = (maximum) => Math.floor(Math.random() * maximum);

const getNRandomNumbers = (maximum, howMany) => {
  if (howMany <= maximum) {
    let result = new Set();
    while (result.size < howMany) result.add(getRandomNumber(maximum));
    return [...result];
  } else {
    console.error("PortraitWrapper - getNRandomNumbers - infinite loop");
  }
};

export const getNRandomChars = (dataArray, howMany) => {
  return getNRandomNumbers(dataArray.length, howMany).map(
    (number) => dataArray[number]
  );
};
