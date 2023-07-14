'use strict';
// selecting elements

const score1=document.querySelector('.score--1');
const score2=document.querySelector('.score--2');
const diceImg=document.querySelector('.dice');
const btnNew=document.querySelector('.new-btn');
const btnHold=document.querySelector('.hold-btn');
const btnRoll=document.querySelector('.roll-btn');
let current1=document.querySelector('.current--1');
let current2=document.querySelector('.current--2');
const player1=document.querySelector('.player-1');
const player2=document.querySelector('.player-2');

let scores=[0,0];
let currentScore = 0;
let activePlayer = 1;
let playing=true;

//hide dice 


//fn
const switchPlayer=function(){
    document.querySelector(`.current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 1 ? 2 : 1;
    player1.classList.toggle('player-active');
    player2.classList.toggle('player-active');
}
const init = function(){
    diceImg.classList.add('hidden');
  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent=0;
  current2.textContent=0;
  playing = true;
   scores = [0, 0];
  currentScore = 0;
  activePlayer = 1;
  document.querySelector(`.player-1`).classList.add('player-active');
  document.querySelector(`.player-2`).classList.remove('player-active');
  player1.classList.remove('player-winner');
  player2.classList.remove('player-winner');
}

//roll dice

btnRoll.addEventListener('click',function () {
    if(playing){
    const dice= Math.trunc(Math.random() * 6) + 1;

    diceImg.classList.remove('hidden');
    diceImg.src=`dice-${dice}.png`;

    if(dice !== 1){
        currentScore += dice;
       document.querySelector(`.current--${activePlayer}`).textContent=currentScore;
    }
    else{
        switchPlayer();
    }
}  
});

btnHold.addEventListener('click',
function(){
 if(playing){
    scores[activePlayer-1] += currentScore;
    document.querySelector(`.score--${activePlayer}`).textContent =
      scores[activePlayer-1];

      if(scores[activePlayer-1] >= 20)
      {
           playing = false;
       document.querySelector(`.player-${activePlayer}`).classList.add('player-winner'); 
        document.querySelector(`.player-${activePlayer}`).classList.add('player-active');
        diceImg.classList.add('hidden');
        
      }
      else{
        switchPlayer();
      }}
});

btnNew.addEventListener('click', init );


