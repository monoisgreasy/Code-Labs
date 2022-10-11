// clasess

// Templates for classes

class User {
    name: string = '';
    age: number = 0;
    occupation: string = '';

// A method is a function defined in a class

    eat() {
        console.log("I am eating.")
    }

    logMyName() {
        console.log("My name is " + this.name)
    }

    logMyDetails() {
        // Log my name to the console
        console.log("My name is " + this.name)
        // log my age into the concole
        console.log("My age is " + this.age)
        // log my occupation in the console
        console.log("My occupation is " + this.occupation)
    }
}

class Animal {
    legCount: number = 0;
    species: string = '';
    breed: string = '';

    // Method

    drink() {
        console.log("I am drinking.")
    }
}

let animal = new Animal();
animal.breed = "Snake";
animal.species = "Copperhead";
animal.legCount = 0;
animal.drink();

// creating a new user/object

let user = new User();
user.name = "John";
user.age = 20;
user.occupation = "Doctor";

console.log(user)

// Execute eat method

user.eat();
user.logMyName();
user.logMyDetails();

let zach: User = new User();
zach.age = 16;
zach.name = "Zach";
zach.occupation = "Student";


// Windows 
// PS C:\Users\smendez\Code Labs> cd class-13-demo
// PS C:\Users\smendez\Code Labs\class-13-demo> npm install typescript
// PS C:\Users\smendez\Code Labs\class-13-demo> npx tsc --innit
// PS C:\Users\smendez\Code Labs\class-13-demo> npx tsc index.ts