var Logger = /** @class */ (function () {
    function Logger() {
        this.randomNumber = 0;
        this.randomColor = '';
        this.to100 = 0;
    }
    Logger.prototype.logRandomNumber = function () {
        console.log(Math.random() * 100);
    };
    Logger.prototype.logARandomColor = function () {
        console.log(Math.floor(Math.random() * 100));
    };
    Logger.prototype.logTo100 = function () {
        console.log(Math.random() * 100);
    };
    return Logger;
}());
var log = new Logger();
