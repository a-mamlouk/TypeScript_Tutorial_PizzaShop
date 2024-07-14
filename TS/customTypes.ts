type Food = string;
let favoriteFood: Food = "Pizza";

/*
  challenge :
  Finish the object type defenition
*/

type Adress = {
  street: string;
  city: string;
  zipCode: number;
  country: string;
};

type Person = {
  name: string,
  age: number,
  isStudent: boolean,
  adress?: Adress;
};

let person: Person = {
  name: "Joe",
  age: 42,
  isStudent: false,
  adress: {
    street: "123 Habib Bourguiba",
    city: "Tunis",
    zipCode: 1002,
    country: "Tunisia"
  }
};

let person2: Person = {
  name: "Jill",
  age: 24,
  isStudent: false, // was bugging : misswrote it : isstudent
};

function displayInfo(person) {
  console.log(`${person} lives at ${person.adress.street}`);
}
