function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 1)
}
/*
function playRPS(playerSelection, computerSelection){
    let playerChoice = selectionConverter(playerSelection.toUpperCase())
    if ((playerChoice == 1)&&(computerSelection == 2)){
        console.log('You Lose! Paper Beats Rock.')
        return 0
    } else if((playerChoice == 2) &&(computerSelection == 3)){
        console.log('You Lose! Scissors Beats Paper.')
        return 0
    } else if((playerChoice == 3) &&(computerSelection == 1)){
        console.log('You Lose! Rock Beats Scissors.')
        return 0
    } else if(playerChoice == computerSelection){
        console.log(`It's a Draw! You both choose ${selectionConverter(playerChoice)}.`)
        return 0.5
    } else{
        console.log(`You Won! ${selectionConverter(playerChoice)} beats ${selectionConverter(computerSelection)}.`)
        return 1
    }
}
*/
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

function getPlayerChoice() {
    choice = prompt('What would be your choice of Rock, Paper, or Scissor').toUpperCase();
    return choice
}

function game(){
    let score = 0
    for (let i = 0; i < 5; i++){
        score += playRPS(getPlayerChoice(), getComputerChoice())
    }
    if (score > 3){
        console.log('you won the grudge match. Congratulations :)')
    } else {
        console.log('you lost the grudge match. Better luck next time :(')
    }
}



// this is the start of the additional code added from the UI 
const buttons = document.querySelectorAll('button');
const container = document.querySelector('#container')
const pScore = document.querySelector('#pScore')
const cScore = document.querySelector('#cScore')

buttons.forEach((button) => {
    button.addEventListener('click', function(e){
        playRPS(this.id, getComputerChoice());
        const div = document.createElement('div');
        div.textContent = ``
        console.log(pScore.textContent)
    })
})

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
}

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