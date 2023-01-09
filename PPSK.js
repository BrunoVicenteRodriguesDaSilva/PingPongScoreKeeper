const scoreBoard = document.querySelector('#scoreBoard');
let maxWin = document.querySelector('#maxWin');
const scores = document.querySelector('#scores');
const p1Sc = document.querySelector('#p1Sc');
const p2Sc = document.querySelector('#p2Sc');
const reset = document.querySelector('#reset');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
let player1 = 0;
let player2 = 0;
let gameOver = false;


p1Sc.addEventListener('click', function(){
   
    if (!gameOver){
    player1++;
    p1.innerText = `${player1}` 
        if (player1 === parseInt(maxWin.value)){
        gameOver = true;
        p1.style.color = 'green';
        p2.style.color = 'red';
        }   
    }
})
p2Sc.addEventListener('click', function(){
    if (!gameOver){
    player2++;
    p2.innerText = `${player2}`
        if (player2 === parseInt(maxWin.value)){
        gameOver = true;
        p2.style.color = 'green';
        p1.style.color = 'red';
        }
    }
})
reset.addEventListener('click', function(){
    maxWin.value = 5;
    reseting();
})
maxWin.addEventListener('change', reseting)

function reseting(){
    p1.innerText = '0'
    p2.innerText = '0'
    p1.style.color = '';
    p2.style.color = '';
    player1 = 0;
    player2 = 0;
    gameOver = false;
}