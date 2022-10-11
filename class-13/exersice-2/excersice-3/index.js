var Person = /** @class */ (function () {
    function Person() {
        this.favoriteColor = '';
    }
    Person.prototype.LogFavoriteColor = function () {
        console.log("My favorite color is " + this.favoriteColor);
    };
    return Person;
}());
var person = new Person();
person.favoriteColor = "Blue";
