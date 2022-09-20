function addRedSquare() {
    let containerElement = document.getElementById("container");
    // Step 1 Create an element
    let redSqaureElement = document.createElement("div");
    // Step 2 Style the element
    redSqaureElement.style.backgroundColor = "red";
    redSqaureElement.style.width = "200px";
    redSqaureElement.style.marginBottom = "10px";
    redSqaureElement.style.height = "200px";

    console.log(redSqaureElement)
    // Step 3 Add element to our container
    containerElement.appendChild(redSqaureElement);
}

function addSquareEverySecond() {
    setInterval(addRedSquare, 1000)
}