var Human = /** @class */ (function () {
    function Human() {
        this.birthYear = 0;
    }
    Human.prototype.ageDifference = function () {
        console.log("The age difference between my animal and I is " + this.birthYear);
    };
    return Human;
}());
var Animal = /** @class */ (function () {
    function Animal() {
        this.birthYear = 0;
    }
    return Animal;
}());
var human = new Human();
var animal = new Animal();
human.birthYear = 2000;
animal.birthYear = 2015;
