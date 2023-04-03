let playerSelection = ""
function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 1)
}

function playRPS(playerSelection, computerselection){
    if ((playerSelection == 'ROCK')&&(computerselection == 2)){
        console.log('You Lose! Paper Beats Rock.')
    } else if((playerSelection == 'PAPER') &&(computerselection == 3)){
        console.log('You Lose! Scissors Beats Paper.')
    } else if((playerSelection == 'SCISSOR') &&(computerselection == 1)){
        console.log('You Lose! Rock Beats Scissors.')
    }
}


