class Logger {
    randomNumber: number = 0;
    randomColor: string = '';
    to100: number = 0;

    logRandomNumber() {
        console.log(Math.random()*100)
    }

    logARandomColor() {
        console.log(Math.floor(Math.random()*100))
    }

    logTo100() {
        console.log(Math.random()*100)
    }
}

let log = new Logger();
