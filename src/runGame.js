function runGame() {
  const cards = document.getElementsByClassName('card');
  const selectedCards = [];
  const pairs = [];
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function (e) {
      const currentCard = e.currentTarget;
      whenToFlipCards(currentCard, selectedCards, pairs);
    }, false);
  }
}

function whenToFlipCards(currentCard, selectedCards, pairs){
  const flipCards = selectedCards.length <= 2;
  if (flipCards) {
    flipCard(currentCard);
    selectedCards.push(currentCard);
    checkForAMatch(selectedCards, pairs);
    attemptNewMatch(selectedCards)
  }
}

function flipCard(card){
  card.classList.toggle('is-flipped');
}

function checkForAMatch(selectedCards, pairs) {
  if (selectedCards.length === 2) {
    handleMatch(...selectedCards, pairs);
  }
}

function handleMatch(selectedCard1, selectedCard2, pairs) {
  const firstCard = selectedCard1.getElementsByClassName('card__face card__face--back')[0].innerHTML
  const secondCard = selectedCard2.getElementsByClassName('card__face card__face--back')[0].innerHTML
  

  if (firstCard === secondCard && selectedCard1 !== selectedCard2){
    selectedCard1.remove();
    selectedCard2.remove();
    pairs.push("match")
    win(pairs)
  }
}

function attemptNewMatch(selectedCards) {
  if (selectedCards.length === 3) {
    flipCard(selectedCards.shift());
    flipCard(selectedCards.shift());
  }
}

function win(pairs){
  if (pairs.length === 18){
    console.log('You won!');
  }
}
