let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let player = {
  name: "Per",
  chips: 200,
};

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randNumber = Math.floor(Math.random() * 13) + 1;
  if (randNumber > 10) {
    return 10;
  } else if (randNumber === 1) {
    return 11;
  } else {
    return randNumber;
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
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = `Sum: ${sum}`;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
