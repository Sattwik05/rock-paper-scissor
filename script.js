
let computerScore=0;
let humanScore=0;
function playRound(){
    let userOption=prompt(`type your your option`);
    const options=["rock","paper","scissor"];
    let result=0;
    let value=0;

    value=Math.floor(Math.random()*options.length);
    if(userscore==options[value]){
        console.log("its a tie!!");

    }
    else{
    switch (userOption) {
        case "rock":
            result = (options[value]==="paper") ? 1 : 0;
            break;
        case "paper":
            result = (options[value]==="scissor") ? 1 : 0;
            break;
        case "scissor":
            result = (options[value]==="rock") ? 1 : 0;
            break;
    
        default:
            console.log("SYNTAX ERROR");
            break;
    }
}
if(result==1){
    console.log("you win this round"); 
    humanScore++;
}
else{console.log("you lose this round");
    computerScore++;
}
}
function scoreBoard(computerScore,humanScore){
    if(humanScore>computerScore){
        console.log("YOU ARE THE WINNER");
    }
    else if(humanScore<computerScore){
        console.log("YOU lost");
    }
    else{
        console.log("its a tiee!");
    }
}
function playGame(){
    for(let round=0 ;round<5;round++){
        playRound();
    }
    scoreBoard(computerScore,humanScore);
}
playGame();