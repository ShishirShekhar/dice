var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var img1 = "./src/images/dice" + randomNumber1.toString() + ".png";
var img2 = "./src/images/dice" + randomNumber2.toString() + ".png";

document.getElementsByClassName("img1")[0].setAttribute("src", img1);
document.getElementsByClassName("img2")[0].setAttribute("src", img2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player2 Wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}