let human = document.querySelector(".human");
let computer = document.querySelector(".computer");
let won = document.querySelector(".won");
let lose = document.querySelector(".lose");
let draw = document.querySelector(".draw");
 
// Play Function
function play(x) {
    let choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random()*3);   
    let computerChoice = choices[Math.floor(Math.random()*3)];
    let result;

    // Determine the result
    if (x == computerChoice) {
        result = "draw";
    } else if (
        (x == "rock" && computerChoice == "scissors") ||
        (x == "paper" && computerChoice == "rock") ||
        (x == "scissors" && computerChoice == "paper")
    ) {
        result = "won";
    } else {
        result = "lose";
    };       
    
    // Output chosen
    human.innerHTML = "Your Choice:" + x.toUpperCase();
    computer.innerHTML = "Computer Choice:" + computerChoice.toUpperCase();

    // Output result
    if (result == "draw") {
        draw.classList.remove("hidden");
        won.classList.add("hidden");
        lose.classList.add("hidden");
    } else if (result == "won") {
        draw.classList.add("hidden");
        won.classList.remove("hidden");
        lose.classList.add("hidden");
    } else if(result == "lose") {
        draw.classList.add("hidden");
        won.classList.add("hidden");
        lose.classList.remove("hidden");  
    };
}