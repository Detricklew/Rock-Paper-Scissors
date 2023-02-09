let player = 0;
let computer = 0;
const playerchoices = document.querySelectorAll(`.option`);

function loadOptions() {
    playerchoices.forEach(playerchoice =>{
        playerchoice.addEventListener('click', function(evt){
            playRound(evt);
        })
    })
}

function removeSelect(){
    playerchoices.forEach(playerchoice =>{
        if(playerchoice.classList.contains('selected')){
            playerchoice.classList.toggle('selected');
            return;
        }
        else{
            return;
        }
    })
}

function displayChoice(id, choice){
    const div = document.querySelector(id);

    div.textContent = "";

    switch(choice){
        case 'rock':
            div.textContent = '✊🏾';
            break;
        case 'paper':
            div.textContent = '🖐🏾';
            break;
        case 'scissors':
            div.textContent = '✌🏾';
            break;
    }
    return;
}

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

function playRound(evt){
    removeSelect();
    evt.target.classList.toggle("selected");
    const playerchoice = evt.target.id.toString();
    let roundresult;
    let winner;
    const computerchoice = getComputerChoice();
    const div = document.querySelector('#result');

    if (playerchoice == 'rock' && computerchoice == 'scissors'){
            roundresult = "You win this round!";
            winner = 1;
    }
    else if(playerchoice == 'paper' && computerchoice == 'rock'){
            roundresult = "You win this round!";
            winner = 1;
    }
    else if(playerchoice == 'scissors' && computerchoice == 'paper'){
            roundresult = "You win this round!";
            winner = 1;
    }
    else if(playerchoice == computerchoice){
        roundresult = "Tie Round!"
        winner = 3;
    }
    else{
        roundresult = "Computer wins this round!";
        winner = 2;
    }

    switch(winner){
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

    displayChoice("#playerchoice", playerchoice);
    displayChoice("#compchoice", computerchoice);

    div.textContent = roundresult;
    console.log(roundresult + `\nYou picked ${playerchoice}! \nComputer picked ${computerchoice}!`);
    console.log(`Current score: \n Player: ${player}\n Computer: ${computer}`);
}



loadOptions()