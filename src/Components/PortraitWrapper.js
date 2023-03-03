let myResponse = await fetch("https://thronesapi.com/api/v2/Characters", {method: "GET"});

let data = await myResponse.json();

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