function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice(){
    let indice = getRandomInt(3);
    let choice = ["rock", "paper", "scissors"];
    return choice[indice];
}

function getPlayerChoice(){
    let input;
    let check = true;

    do {
       input = prompt("Enter your input:");
       input = input.toLowerCase();
       if(input == "rock"){
        check = false;
       }
       else if(input == "paper"){
        check = false;
       }
       else if (input == "scissors"){
        check = false;
       }
    }
    while(check);
    return input;
}

function playRound(computerchoice, playerchoice){
    let roundresult;
    let winner;
    if (playerchoice == 'rock' && computerchoice == 'scissors'){
            roundresult = "You win this round";
            winner = 1;
            console.log(roundresult);
            console.log("test rock");
            return [roundresult, winner];
    }
    else if(playerchoice == 'paper' && computerchoice == 'rock'){
            roundresult = "You win this round";
            winner = 1;
            console.log(roundresult);
            console.log("test paper");
            return [roundresult, winner];
    }
    else if(playerchoice == 'scissors' && computerchoice == 'paper'){
            roundresult = "You win this round";
            winner = 1;
            console.log(roundresult);
            console.log("test scissors");
            return [roundresult, winner];
    }
    else{
        roundresult = "You lose this round";
        winner = 2;

        return [roundresult, winner]; 
    }
}

function game(){
    let computerchoice = getComputerChoice();
    let playerchoice = getPlayerChoice();

    let results = playRound(computerchoice, playerchoice);
    return;
}

game();