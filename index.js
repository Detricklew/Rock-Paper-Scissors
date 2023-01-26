function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice{
    let indice = getRandomInt(3);
    let choice = ["rock", "paper", "scissors"];
    return choice[indice];
}

function getPlayerChoice{
    let input;
    let check = false;

    while(check){
       input = prompt("Enter your input:");
       input = input.toLowerCase();
       if(input == "rock"){
        check = true;
       }
       else if(input == "paper"){
        check = true;
       }
       else if (input == "scissors"){
        check = true;
       }
    }
    return input;
}