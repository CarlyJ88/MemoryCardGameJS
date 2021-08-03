function runGame() {
  var cards = document.getElementsByClassName('card');
  let selectedCards = [];
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function (e) {
      const currentCard = e.currentTarget;
      whenToFlipCards(currentCard, selectedCards);
    }, false);
  }
}

function whenToFlipCards(currentCard, selectedCards){
  const flipCards = selectedCards.length <= 2;
  if (flipCards) {
    flipCard(currentCard);
    selectedCards.push(currentCard);
    checkForAMatch(selectedCards);
    attemptNewMatch(selectedCards)
  }
}

function flipCard(card){
  card.classList.toggle('is-flipped');
}

function checkForAMatch(selectedCards) {
  if (selectedCards.length === 2) {
    handleMatch(...selectedCards);
  }
}

function attemptNewMatch(selectedCards) {
  if (selectedCards.length === 3) {
    flipCard(selectedCards.shift());
    flipCard(selectedCards.shift());
  }
}

function handleMatch(selectedCard1, selectedCard2) {
  const firstCard = selectedCard1.getElementsByClassName('card__face card__face--back')[0].innerHTML
  const secondCard = selectedCard2.getElementsByClassName('card__face card__face--back')[0].innerHTML

  if (firstCard === secondCard && selectedCard1 !== selectedCard2){
    selectedCard1.remove();
    selectedCard2.remove();
  }
}
