fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
        // step 1 access the img element
        let imageElement = document.getElementById("random-image");
        // step 2 store the image address from data to img element

        console.log(data.message);
        imageElement.src = data.message;
    });