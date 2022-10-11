class Person {
    favoriteColor: string = '';

    LogFavoriteColor() {
        console.log("My favorite color is " + this.favoriteColor)
    }
}

let person = new Person();
person.favoriteColor = "Blue";