let rRange = document.querySelector('#r-range');
let gRange = document.querySelector('#g-range');
let bRange = document.querySelector('#b-range');
let bodyTag = document.querySelector('body');

let randomBtn = document.querySelector('#random');


function changeBackground() {
    let redValue = rRange.value;
    let greenValue = gRange.value;
    let blueValue = bRange.value;

    bodyTag.style.backgroundColor = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
}

function randomColor() {
    let randomNumber1 = Math.floor(Math.random() * 255);
    let randomNumber2 = Math.floor(Math.random() * 255);
    let randomNumber3 = Math.floor(Math.random() * 255);
    
    let arrayOfColors = [randomNumber1, randomNumber2, randomNumber3];

    return arrayOfColors;
}

rRange.addEventListener('input', function () {
    changeBackground();
});

gRange.addEventListener('input', function () {
    changeBackground();
});

bRange.addEventListener('input', function () {
    changeBackground();
});


randomBtn.addEventListener('click', function () {

    let colors = randomColor();

    rRange.value = colors[1];
    gRange.value = colors[2];
    bRange.value = colors[3];

    changeBackground();

});