const escolhaBtn = document.querySelectorAll('.choiceBtn');
const resetBtn = document.querySelector('.resetBtn');
const subsBtn = document.querySelector('.subsBtn');
const computerScore = document.querySelector('#computerScore');
const playerScore = document.querySelector('#meScore');
const resultado = document.querySelector('#result');
const resultScore = document.querySelector('#resultScore');
const resultScore1 = document.querySelector('#resultScore1');
const resultScore2 = document.querySelector('#resultScore2');
const autoplayBtn =  document.querySelector('.autoplayBtn');
let player ;
let computer;
let randNumber;
let isAutoPlaying = false;
let intervalId;
let score = {
    wins: 0,
    losses: 0,
    ties: 0
};
autoplayBtn.addEventListener('click', autoPlayFc);
resetBtn.addEventListener('click', resetGame);
subsBtn.addEventListener('click', changeSubs);
scoreText();
//resultScore.innerHTML = `TIES: ${score.ties} LOSSES: ${score.losses} WINS: ${score.wins}`

function playGame(){
//playerTurn();
computer = computerTurn();
player = computerTurn();
playerScore.innerHTML = `ME
 <img src="${player}.png" class="move-icon"><img src=" ${computer}.png" class="move-icon"> COMPUTADOR `;
resultado.textContent = checkWinner();
scoreText();
}

escolhaBtn.forEach(button => button.addEventListener('click', () => {
player = button.textContent;
computer = computerTurn();
playerScore.innerHTML = `ME
 <img src="${player}.png" class="move-icon"><img src=" ${computer}.png" class="move-icon"> COMPUTADOR `;
resultado.textContent = checkWinner();
scoreText();
console.log(msg);

}));
function autoPlayFc(){
    if(!isAutoPlaying){
       intervalId = setInterval(function(){
            playGame();
        },1000)
        isAutoPlaying = true;
    }else{
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
    
}
 function computerTurn(){
    randNumber = Math.floor(Math.random()* 3) + 1;
    let result = '';

    switch(randNumber){
        case 1:
            // computer = 'SCISSORS';
            result = 'SCISSORS';
            break;
    
        case 2:
            // computer = 'PAPER';
            result = 'PAPER';
            break;
    
        case 3:
            // computer = 'ROCK';
            result = 'ROCK';
            break;
    }

    return result;
 };
 function playerTurn(){
    randNumber = Math.floor(Math.random()* 3 ) + 1;

    switch(randNumber){
        case 1:
            player = 'PAPER'
            break;
    
        case 2:
            player = 'ROCK'
            break;
    
        case 3:
            player = 'SCISSORS'
            break;
    }
 };
 function checkWinner(){
    let resultado;
 
    if(computer === player){
            score.ties++;
        return ('DRAW!');    
    }
    else if(player === 'PAPER'){
       
        if(computer === 'SCISSORS' ){
            resultado='YOU LOSE!'
            score.losses++
        }else{
            score.wins++
            resultado='YOU WIN!'
        }
       return resultado;  
    }
    else if(player === 'SCISSORS'){
    
        if(computer === 'ROCK' ){
            resultado='YOU LOSE!'
            score.losses++
        }else{
            resultado='YOU WIN!'
            score.wins++
        }
       return resultado;  
    }
    else if(player === 'ROCK'){
        
        if(computer === 'PAPER' ){
            resultado='YOU LOSE!'
            score.losses++
        }else{
            
            resultado='YOU WIN!'
            score.wins++
        }
       return resultado;  
    }
   
    //localStorage.setItem('message', 'hello');
 };
 function resetGame() {
    player ='' ;
    computer ='';
    randNumber=0;

    localStorage.removeItem('score')
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
   // playerScore.textContent = `ME: ${msg}` ;
   gameStart();
   return
    
 };
 function gameStart(){  
    playerScore.textContent = `` ;
    computerScore.textContent = `` ;
    resultScore.textContent = `SCORE: ` ;
    resultado.textContent = ``;
    scoreText();
    
 };
 function changeSubs(){
    if(subsBtn.innerText ==='SUBSCRIBE'){
        subsBtn.innerHTML = 'SUBSCRIBED'
        subsBtn.classList.add('subsBtn-change') 
    }else{
        subsBtn.innerHTML = 'SUBSCRIBE'
        subsBtn.classList.remove('subsBtn-change')
    }
    
 };
 function scoreText(){
    resultScore.textContent = `TIES:  ${score.ties}, LOSSES: ${score.losses} , WINS: ${score.wins}`

 };