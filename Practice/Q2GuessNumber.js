let gameNumber = 20;
let usrNumber = prompt("Enter your number : ");

while (usrNumber != gameNumber) {

    usrNumber == gameNumber ? console.log("correct answer") : console.log()
    usrNumber < gameNumber ? console.log("Game number is greater than your number") : console.log("Game number is lesser than your number");

    usrNumber = prompt("Guess again : ")
}