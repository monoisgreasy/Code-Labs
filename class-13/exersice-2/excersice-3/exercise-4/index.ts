class Human {
    birthYear: number = 0;

    ageDifference() {
        console.log("The age difference between my animal and I is " + this.birthYear)
    }
}

class Animal {
    birthYear: number = 0;
}

let human = new Human();
let animal = new Animal();

human.birthYear = 2000;
animal.birthYear = 2015

