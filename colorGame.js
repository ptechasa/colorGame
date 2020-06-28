// var colors = [
//     "rgb(255, 0, 0)",   //Red
//     "rgb(255, 255, 0)", //Yellow
//     "rgb(0, 255, 0)",   //Green
//     "rgb(0, 255, 255)", //Cyan
//     "rgb(0, 0, 255)",   //Blue
//     "rgb(255, 0, 255)"  //Magenta
// ]

var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
})

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
})

resetButton.addEventListener("click", function () {
    //Generate all new colors
    colors = generateRandomColors(6);
    //Pick a new random color from array
    pickedColor = pickColor();
    //Change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    //Change colors of squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "#232323";
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //Add initial colors to square
    squares[i].style.background = colors[i];

    //Add click Event Listeners to all squares
    squares[i].addEventListener("click", function () {
        //Grab color of clicked square
        var clickedColor = this.style.background;

        //Compare color to pickColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";

            //Reset button to play game again
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try again!!";
        }
    });
}

function changeColors(color) {
    //Loop through all squares
    for (var i = 0; i < squares.length; i++) {
        //Change each color to match given color
        squares[i].style.background = color;
    }
}

function pickColor() {
    //Generate the random number of colors range
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //Make an array
    var arr = [];
    //Repeat num times
    for (var i = 0; i < num; i++) {
        //Get random color and push into arr
        arr.push(randomColor());
    }
    //Return that array
    return arr;
}

function randomColor() {
    //Pick a "red" from 0 - 255
    var red = Math.floor(Math.random() * 256);
    //Pick a "green" from 0 - 255
    var green = Math.floor(Math.random() * 256);
    //Pick a "blue" from 0 - 255
    var blue = Math.floor(Math.random() * 256);
    // rgb(red, green, blue)
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

