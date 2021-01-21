// Import stylesheets
import "./style.css";

class Dog {
  age: Number;
  dogState: {
    alive: boolean;
    dead: boolean;
    family: { father: string; mother: string };
  };
}

const myObject: Dog = {
  age: 1,
  dogState: {
    alive: true,
    dead: false,
    family: { father: "Brutus", mother: "Amalia" }
  }
};
const copiedObject = { ...myObject } as Dog; // shallow
// Object.setPrototypeOf(copiedObject, Object.getPrototypeOf(myObject));
//const copiedObjet = Object.assign(myObject);

// Redo the shallow copy at each level where you want to introduce a change
copiedObject.dogState = { ...copiedObject.dogState }; // shallow

copiedObject.age = 11;
copiedObject.dogState.alive = false;
copiedObject.dogState.family.father = "pluto";

console.log("original", myObject);
console.log("copy", copiedObject);
