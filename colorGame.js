var colors = [
    "rgb(255, 0, 0)",   //Red
    "rgb(255, 255, 0)", //Yellow
    "rgb(0, 255, 0)",   //Green
    "rgb(0, 255, 255)", //Cyan
    "rgb(0, 0, 255)",   //Blue
    "rgb(255, 0, 255)"  //Magenta
]

var squares = document.querySelectorAll(".square");
var pickColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickColor;

for (var i = 0; i < squares.length; i++) {
    //Add initial colors to square
    squares[i].style.background = colors[i];

    //Add click Event Listeners to all squares
    squares[i].addEventListener("click", function () {

        //Grab color of clicked square
        var clickedColor = this.style.background;
        //Compare color to pickColor
        if (clickedColor === pickColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try again!!";
        }
    });

    function changeColors(color) {
        //Loop through all squares
        for (var i = 0; i < squares.length; i++) {
            //Change each color to match given color
            squares[i].style.background = color;
        }
    
    }

}