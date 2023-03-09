// Select all three buttons using any sort of selection method you prefer.
// Attach event listeners to each of them and make sure those are working. This can be done with a simple function that just does a console log on click.

let playerOption = 0;
let machineOption = 0;

// Changed this to an object to make it easier for some functions to get data
// Probably not necessarily better or worse code, but it helps some functions later on
const gameData = {
    games: 1,
    tie: 0,
    win: 0,
    loss: 0,
}

function playerChoice(choice){
    // Instead of repeating this line, we can just run it once and change it based on the value of the choice.
    document.getElementById("user").innerHTML = `You chose ${choice.target.value}`
    // We can also put the machineChoice in here
    let comp = machineChoice();
    document.getElementById("computer").innerHTML = `The Computer picked ${comp}`;
    // There are ways we refactor to remove these if statements entirely as well
    if(choice.target.value == "rock"){
        playerOption = 1;
        // document.getElementById("user").innerHTML = "You choose rock";
        // machineChoice(playerOption);
    }
    else if(choice.target.value == "paper"){
        playerOption = 2;
        // document.getElementById("user").innerHTML = "You choose paper";
        // machineChoice(playerOption);
    }
    else if(choice.target.value == "scissors"){
        playerOption = 3;
        // document.getElementById("user").innerHTML = "You choose scissors";
        // machineChoice(playerOption);
    }
    // Now we just run mainGame in here and skip the intermediary machineChoice function
    mainGame(playerOption, comp);
}

function machineChoice(){
    // Just return what the machine's choice was
    return Math.floor(Math.random() * 3) + 1; // This generates a random number between 1 and 3
    
    // while(machineOption < 1){
    //     machineOption = Math.floor(Math.random() * 3);
    // }
    // if(machineOption == 1){
    //     document.getElementById("computer").innerHTML = "The Computer picked rock";
    // }
    // else if(machineOption == 2){
    //     document.getElementById("computer").innerHTML = "The Computer picked paper";
    // }
    // else if(machineOption == 3){
    //     document.getElementById("computer").innerHTML = "The Computer picked scissors";
    // }

    // Don't need to run mainGame in here anymore
    // mainGame(playerOption, machineOption);
}

function mainGame(playerOption, machineOption){
    // These will handle all of the outcomes for tie, loss or win
    // Then it calls an endGame function that will handle displaying the results
    // (this is a lot better than having several if statements)
    if (playerOption === machineOption) {
        endGame("tie"); // This will pass in whether it was a tie, win, or loss, 
    } else if (         // which will be used as a condition in the endGame function
        (playerOption === 1 && machineOption === 2) ||
        (playerOption === 2 && machineOption === 3) ||
        (playerOption === 3 && machineOption === 1)
    ) {
        endGame("loss");
    } else {
        endGame("win");
    }
    // if(playerOption == machineOption){
    //     //Update Score
    //     ties++;
    //     document.getElementById("tie").innerHTML = ties;
    //     //add final message
    //     document.getElementById("final").innerHTML = "Don't worry The Computer is already ready for another round!";
    //     games++;
    //     document.getElementById("game").innerHTML = games;
    // }
    // else if(playerOption == 1 && machineOption == 3){
    //     //player wins
    //     wins++;
    //     document.getElementById("win").innerHTML = wins;

    //     document.getElementById("final").innerHTML = "Don't worry The Computer is already ready for another round!";
    //     games++;
    //     document.getElementById("game").innerHTML = games;
    // }
    // else if(playerOption == 3 && machineOption == 1){
    //     //player loses
    //     losses++;
    //     document.getElementById("loss").innerHTML = losses;

    //     document.getElementById("final").innerHTML = "Don't worry The Computer is already ready for another round!";
    //     games++;
    //     document.getElementById("game").innerHTML = games;
    // }
    // else if(playerOption == 2 && machineOption == 1){
    //     //player wins
    //     wins++;
    //     document.getElementById("win").innerHTML = wins;

    //     document.getElementById("final").innerHTML = "Don't worry The Computer is already ready for another round!";
    //     games++;
    //     document.getElementById("game").innerHTML = games;
    // }
    // else if(playerOption == 1 && machineOption == 2){
    //     //player loses
    //     losses++;
    //     document.getElementById("loss").innerHTML = losses;

    //     document.getElementById("final").innerHTML = "Don't worry The Computer is already ready for another round!";
    //     games++;
    //     document.getElementById("game").innerHTML = games;
    // }
    // else if(playerOption == 2 && machineOption == 3){
    //     //player loses
    //     losses++;
    //     document.getElementById("loss").innerHTML = losses;

    //     document.getElementById("final").innerHTML = "Don't worry The Computer is already ready for another round!";
    //     games++;
    //     document.getElementById("game").innerHTML = games;
    // }
    // else if(playerOption == 3 && machineOption == 2){
    //     //player wins
    //     wins++;
    //     document.getElementById("win").innerHTML = wins;

    //     document.getElementById("final").innerHTML = "Don't worry The Computer is already ready for another round!";
    //     games++;
    //     document.getElementById("game").innerHTML = games;
    // }
}

// This function will handle ending the game for all outcomes
function endGame(outcome) {
    gameData.games++;
    document.getElementById("game").innerText = gameData.games;
    document.getElementById("final").innerText = `You ${outcome}. Don't worry The Computer is already ready for another round!.`;
    gameData[outcome]++;
    document.getElementById(outcome).innerText = gameData[outcome];
}


buttons = document.querySelectorAll(".choice");
// This will add eventListeners to all buttons in one block, instead of three separate blocks
buttons.forEach((element) => {
    element.addEventListener("click", playerChoice)
});

// document.getElementById("rock").addEventListener('click', () => {
//     playerChoice(rock);
// });

// document.getElementById("paper").addEventListener('click', () => {
//     playerChoice(paper);
// });

// document.getElementById("scissors").addEventListener('click', () => {
//     playerChoice(scissors);
// });