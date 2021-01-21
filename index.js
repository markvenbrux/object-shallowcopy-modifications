// Import stylesheets
import "./style.css";

let myObject = {
  age: 1,
  dog: {
    alive: true,
    dead: false
  }
};
const copiedObjet = { ...myObject }; // shallow
//const copiedObjet = Object.assign(myObject);

copiedObjet.dog = { ...copiedObjet.dog }; // shallow

copiedObjet.age = 11;
copiedObjet.dog.alive = false;

console.log("original", myObject);
console.log("copy", copiedObjet);
