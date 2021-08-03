function MemoryCardGame() {
  createBoard(getCards());
  runGame();
}
MemoryCardGame();

function createBoard(cards) {
  const board = document.getElementById('board');
  createRow(cards, board);
  
}

function createRow(cards, board) {
  for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
    const row = document.createElement('tr');
    createCell(cards, row, rowIndex)
    board.append(row);
  }
}

function createCell(cards, row, rowIndex) {
  for (let columnIndex = 0; columnIndex < 6; columnIndex++) {
    const cardId = 6 * rowIndex + columnIndex;
    const cell = document.createElement('td');
    cell.className = 'cell';
    createCard(cards, cardId, cell)
    row.appendChild(cell)
  }
}

function createCard(cards, cardId, cell) {
  let card = document.createElement('div');
  card.className = 'card';
  card.append(createCardSide('front', cardId));
  card.append(createCardSide('back', cardId, cards));
  cell.append(card);
}

function createCardSide(side, id, images) {
  let card = document.createElement('div');
  card.id = side + id;
  card.className = 'card__face card__face--' + side;

  if (side === 'back') {
    let image = document.createElement("img");
    image.src = images[id];
    card.appendChild(image);
  }
  return card;
}

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

function getCards() {
  let images = ["images/air.png", "images/copy.jpeg", "images/cylindar.png", "images/earth.png", "images/fire.png", "images/infinity.jpeg",
    "images/monitor.png", "images/moon.png", "images/noentry.png", "images/paperclip.png", "images/recycle.png", "images/ruby.png",
    "images/star.png", "images/sun.png", "images/toxic.png", "images/unity.png", "images/water.png", "images/yinyang.png"
  ]
  images = images.concat(images);
  images.sort(() => Math.random() - 0.5);
  return images;
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
    isAMatch(...selectedCards);
  }
}

function attemptNewMatch(selectedCards) {
  if (selectedCards.length === 3) {
    flipCard(selectedCards.shift());
    flipCard(selectedCards.shift());
  }
}

function isAMatch(selectedCard1, selectedCard2) {
  const firstCard = selectedCard1.getElementsByClassName('card__face card__face--back')[0].innerHTML
  const secondCard = selectedCard2.getElementsByClassName('card__face card__face--back')[0].innerHTML

  if (firstCard === secondCard && selectedCard1 !== selectedCard2){
    selectedCard1.remove();
    selectedCard2.remove();
  }
}
