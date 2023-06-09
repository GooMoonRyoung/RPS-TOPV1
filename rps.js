//selected HTML elements for later use
const buttons = document.querySelectorAll('button');
const container = document.querySelector('#container')
const pScore = document.querySelector('#pScore')
const cScore = document.querySelector('#cScore')

//Randomly picks choice for the computer
function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 1)
}

//Converts a selection between backend logic a string for displaying
function selectionConverter(selection){
    if (selection == "ROCK"){
        return 1
    } else if(selection == "PAPER"){
        return 2
    } else if(selection == "SCISSOR"){
        return 3
    } else if(selection == 1){
        return "ROCK"
    } else if(selection == 2){
        return "PAPER"
    } else if(selection == 3){
        return "SCISSOR"
    }
}

// Adds eventlisteners on each of the buttons
buttons.forEach((button) => {
    button.addEventListener('click', function(e){
        playRPS(this.id, getComputerChoice());
    })
})

// plays a round of RPS and checks if we are at the end of the game
function playRPS(playerSelection, computerSelection){
    let playerChoice = selectionConverter(playerSelection.toUpperCase())
    if ((playerChoice == 1)&&(computerSelection == 2)){
        const div = document.createElement('div');
        div.textContent = `You Lose! Paper Beats Rock.`
        container.appendChild(div)
        addToScore(2)
    } else if((playerChoice == 2) &&(computerSelection == 3)){
        const div = document.createElement('div');
        div.textContent = `You Lose! Paper Beats Rock.`
        container.appendChild(div)
        addToScore(2)
    } else if((playerChoice == 3) &&(computerSelection == 1)){
        const div = document.createElement('div');
        div.textContent = `You Lose! Paper Beats Rock.`
        container.appendChild(div)
        addToScore(2)
    } else if(playerChoice == computerSelection){
        const div = document.createElement('div');
        div.textContent = `It's a Draw! You both choose ${selectionConverter(playerChoice)}.`
        container.appendChild(div)
        addToScore(0)
    } else{
        const div = document.createElement('div');
        div.textContent = `You Won! ${selectionConverter(playerChoice)} beats ${selectionConverter(computerSelection)}.`
        container.appendChild(div)
        addToScore(1)
    }

    //end game testing conditions
    if (Number(pScore.textContent) >= 5 || Number(cScore.textContent) >= 5){
        endGame(Number(pScore.textContent), Number(cScore.textContent));
    }
}

// Adds points depending on who won the round
function addToScore(player){
    if (player === 1){
        pScore.textContent = (Number(pScore.textContent) + 1)
    }
    if (player === 2){
        cScore.textContent = (Number(cScore.textContent) + 1)
    }
    if (player === 0){
        pScore.textContent = (Number(pScore.textContent) + 0.5)
        cScore.textContent = (Number(cScore.textContent) + 0.5)
        
    }
}

// Closes off the game and tells the User who won.
function endGame(pScore, cScore){
    buttons.forEach((button) => {
        button.disabled = true;
    })
    if (pScore > cScore){
        const div = document.createElement('div');
        div.textContent = `You are the Winner of this grudge match! See you next time.`
        container.appendChild(div)
    }
    if (pScore < cScore){
        const div = document.createElement('div');
        div.textContent = `You have lost this grudge match! See you next time.`
        container.appendChild(div)
    } 
    if (pScore == cScore){
        const div = document.createElement('div');
        div.textContent = `This grudge match is a draw! See you next time.`
        container.appendChild(div)
    }
}