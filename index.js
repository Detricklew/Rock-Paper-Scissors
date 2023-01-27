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
            roundresult = "You win this round!";
            winner = 1;
            return [roundresult, winner];
    }
    else if(playerchoice == 'paper' && computerchoice == 'rock'){
            roundresult = "You win this round!";
            winner = 1;
            return [roundresult, winner];
    }
    else if(playerchoice == 'scissors' && computerchoice == 'paper'){
            roundresult = "You win this round!";
            winner = 1;
            return [roundresult, winner];
    }
    else if(playerchoice == computerchoice){
        roundresult = "Tie Round!"
        winner = 3;
        return [roundresult, winner];
    }
    else{
        roundresult = "You lose this round.....";
        winner = 2;

        return [roundresult, winner]; 
    }
}

function game(){
    let player = 0;
    let computer = 0;

    do{
        if (computer == 5 || player == 5){
            break;
        }
        let computerchoice = getComputerChoice();
        let playerchoice = getPlayerChoice();

        let results = playRound(computerchoice, playerchoice);

        switch(results[1]){
            case 1:
                player++;
                break;
            case 2:
                computer++;
                break;
            case 3:
                break;
            default:
                console.log(`Ran into unexpected problem....`);
                return;
        }

        console.log(results[0] + `\nYou picked ${playerchoice}! \nComputer picked ${computerchoice}!`);
        console.log(`Current score: \n Player: ${player}\n Computer: ${computer}`);
    }
    while(player < 5 || computer < 5 );

    if(player > computer){
        console.log(`You won Congrats!`);
        return;
    }
    else{
        console.log(`You lost.`);
        return;
    }
}

game();