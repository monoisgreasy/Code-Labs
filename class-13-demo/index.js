// clasess
// Templates for classes
var User = /** @class */ (function () {
    function User() {
        this.name = '';
        this.age = 0;
        this.occupation = '';
    }
    // A method is a function defined in a class
    User.prototype.eat = function () {
        console.log("I am eating.");
    };
    User.prototype.logMyName = function () {
        console.log("My name is " + this.name);
    };
    return User;
}());
var Animal = /** @class */ (function () {
    function Animal() {
        this.legCount = 0;
        this.species = '';
        this.breed = '';
    }
    // Method
    Animal.prototype.drink = function () {
        console.log("I am drinking.");
    };
    return Animal;
}());
var animal = new Animal();
animal.breed = "Snake";
animal.species = "Copperhead";
animal.legCount = 0;
animal.drink();
// creating a new user/object
var user = new User();
user.name = "John";
user.age = 20;
user.occupation = "Doctor";
console.log(user);
// Execute eat method
user.eat();
user.logMyName();
// Windows 
// PS C:\Users\smendez\Code Labs> cd class-13-demo
// PS C:\Users\smendez\Code Labs\class-13-demo> npm install typescript
// PS C:\Users\smendez\Code Labs\class-13-demo> npx tsc --innit
// PS C:\Users\smendez\Code Labs\class-13-demo> npx tsc index.ts
