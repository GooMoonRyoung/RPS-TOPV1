function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 1)
}

function playRPS(playerSelection, computerselection){
    let playerChoice = selectionConverter(playerSelection)
    if ((playerChoice == 1)&&(computerselection == 2)){
        console.log('You Lose! Paper Beats Rock.')
        return 0
    } else if((playerChoice == 2) &&(computerselection == 3)){
        console.log('You Lose! Scissors Beats Paper.')
        return 0
    } else if((playerChoice == 3) &&(computerselection == 1)){
        console.log('You Lose! Rock Beats Scissors.')
        return 0
    } else if(playerChoice == computerselection){
        console.log(`It's a Draw! You both choose ${selectionConverter(playerChoice)}.`)
        return 0.5
    } else{
        console.log(`You Won! ${selectionConverter(playerChoice)} beats ${selectionConverter(computerselection)}.`)
        return 1
    }
}

function selectionConverter(selection){
    if (typeof selection === 'string'){
        selection = selection.toUpperCase()
    }    
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
buttons.forEach((button) => {
    button.addEventListener('click', function(e){
        console.log(this.id)
        playRPS(this.id, getComputerChoice())
    })
})