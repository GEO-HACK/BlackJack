
let cards = []; //ordered list of items
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
// let sumeEl = document.getElementById("sum-el");
let sumeEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let player = {
  Name: "Geo",
  Chips: 145,
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.Name + ": $" + player.Chips;//how to access object properties




console.log(cards[0], cards[1]);
//create a function that generates a random number for the card number
function getRandomCard() {
   let randomNumber =  Math.floor(Math.random() * 13) + 1;

   if (randomNumber >10){
    return 10;

   }else if(randomNumber === 1){
     return 11;
   }else{
     return randomNumber;
   }

  
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;


  renderGame();
}
function renderGame() {
  cardsEl.textContent = "Cards: ";
  //create a for loop to iterate throught the cards array
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
 
  if (sum <= 20) {
    message = "Do you want to draw a new card? ";
  } else if (sum === 21) {
    //strict equality
    message = "Wohoo! You've got Blackjack! ";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! ";
    isAlive = false;
  }
  sumeEl.textContent = "Sum: " + sum;
  messageEl.textContent = message;
}
function newCard() {

   if((isAlive === true) && (hasBlackJack === false)){
      let card = getRandomCard();
      sum += card;
      cards.push(card);
      renderGame();
      } 
}



