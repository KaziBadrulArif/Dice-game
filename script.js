// Random Numbers
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1 - 6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1 -6

// Change the image

var image1 = "images/dice" + randomNumber1 + ".png"; //images/dice 1-6
var image2 = "images/dice" + randomNumber2 + ".png"; 

// Set Attribute

document.querySelectorAll("img")[0].setAttribute("src", image1);
document.querySelectorAll("img")[1].setAttribute("src", image2);

// Change Headline


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML ="Player 1 wins!";
} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else{
    document.querySelector("h1").innerHTML = "Tie!";
}


