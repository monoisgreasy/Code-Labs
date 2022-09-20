let colors = ['red', 'blue', 'pink']
 
function changeBackgroundColor() {
    // Getting a random number from 0 - 2
    let randomNumber = Math.floor(Math.random() * 3);

    // Changing the backgrounf to a random color
    document.body.style.backgroundColor = colors[randomNumber]
}
