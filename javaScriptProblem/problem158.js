/*
Create a class that takes the following four 
arguments for a particular football player:

    name
    age
    height
    weight



Also, create three functions for the 
class that returns the following strings:

    getAge() returns "name is age age"
    getHeight() returns "name is heightcm"
    getWeight() returns "name weighs weightkg"

     

*/

class Player {
  constructor(name, age, height, weight) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }

  getAge() {
    return `${this.name} is age ${this.age}`;
  }
  getHeight() {
    return `${this.name} is height ${this.height}`;
  }
  getWeight() {
    return `${this.name} is weight ${this.weight}`;
  }
}

let p = new Player("Manik", 30, 5, 61);
console.log(p.getHeight());
