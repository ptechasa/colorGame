// var colors = [
//     "rgb(255, 0, 0)",   //Red
//     "rgb(255, 255, 0)", //Yellow
//     "rgb(0, 255, 0)",   //Green
//     "rgb(0, 255, 255)", //Cyan
//     "rgb(0, 0, 255)",   //Blue
//     "rgb(255, 0, 255)"  //Magenta
// ]

var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

//Call and Run the init function first
init();

function init() {
    //mode buttond event listeners
    setupModeButtons();
    setupSquares()

    //Run the reset
    reset();
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.lenght; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            // if (this.textContent === "esay") {
            //     numSquares = 3;
            // } else {
            //     numSquares = 6;
            // }
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
    //Set up the squares Listener
    for (var i = 0; i < squares.length; i++) {
        // //Add initial colors to square
        // squares[i].style.background = colors[i];

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
}

function reset() {
    //Generate all new colors
    colors = generateRandomColors(numSquares);
    //Picking a new random color from array
    pickedColor = pickColor();
    //Change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    //Display "New Colors" when refresh the game 
    resetButton.textContent = "New Colors";
    //Display message is cleared when reset the game
    messageDisplay.textContent = "";
    //Change colors of squares
    for (var i = 0; i < squares.length; i++) {
        //If the colors matching with the squres, we will change it into the colors
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        }
        //Otherwise, it will hide
        else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "#ffc72c";
}

// //Add Easy mode button
// easyBtn.addEventListener("click", function () {
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");

//     //Display only three squares
//     numSquares = 3;
//     //Add colors to generate three random colors
//     colors = generateRandomColors(numSquares);
//     //Pick new colors
//     pickedColor = pickColor();
//     //changing the background at the top to show the new color
//     colorDisplay.textContent = pickedColor;

//     //Changing the random colors at the first top three on Easy mode
//     for (var i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.background = colors[i];
//         }
//         //Hide 3 colors when click on Easy mode
//         else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// //Add Hard mode button
// hardBtn.addEventListener("click", function () {
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");

//     //Display all six squares
//     numSquares = 6;
//     //Add colors to generate six random colors
//     colors = generateRandomColors(numSquares);
//     //Pick new colors
//     pickedColor = pickColor();
//     //changing the background at the top to show the new color
//     colorDisplay.textContent = pickedColor;

//     //Changing all the six random colors on Hard mode
//     for (var i = 0; i < squares.length; i++) {
//         //Assign the new color to all squares 
//         squares[i].style.background = colors[i];
//         //All squares are unhidden
//         squares[i].style.display = "block";
//     }
// });

resetButton.addEventListener("click", function () {
    reset();

})

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

