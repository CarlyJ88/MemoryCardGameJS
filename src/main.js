function MemoryCardGame() {
  createBoard(getCards());
  var cards = document.getElementsByClassName('card');
  let selectedCards = [];
  
  for (var i = 0; i < cards.length; i++) { 
    cards[i].addEventListener('click', function (e) {
      const currentCard = e.currentTarget;
      if (selectedCards.length < 3) {
        flipCard(currentCard);
        selectedCards.push(currentCard);
        if (selectedCards.length === 2) {
          isAMatch(selectedCards);
        }
        if (selectedCards.length === 3) {
          flipCard(selectedCards.shift());
          flipCard(selectedCards.shift());
        }
      }
    }, false);
  }
}
MemoryCardGame();

function createBoard(cards) {
  const board = document.getElementById('board');
  
  for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
    const row = document.createElement('tr');
    
    for (let columnIndex = 0; columnIndex < 6; columnIndex++) {
      const cardId = 6 * rowIndex + columnIndex;

      const cell = document.createElement('td');
      cell.className = 'cell';

      let div = document.createElement('div');
      div.className = 'card';
      div.append(createCard('front', cardId));
      div.append(createCard('back', cardId, cards));

      cell.append(div);

      row.appendChild(cell)
    }
    board.append(row);
  }
}

function createCard(side, id, images) {
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

function getCards() {
  let images = ["images/air.png", "images/copy.jpeg", "images/cylindar.png", "images/earth.png", "images/fire.png", "images/infinity.jpeg",
    "images/monitor.png", "images/moon.png", "images/noentry.png", "images/paperclip.png", "images/recycle.png", "images/ruby.png",
    "images/star.png", "images/sun.png", "images/toxic.png", "images/unity.png", "images/water.png", "images/yinyang.png"
  ]
  images = images.concat(images);
  images.sort(() => Math.random() - 0.5);
  return images;
}

function isAMatch(selectedCards) {
  if (selectedCards[0].getElementsByClassName('card__face card__face--back')[0].innerHTML === selectedCards[1].getElementsByClassName('card__face card__face--back')[0].innerHTML && selectedCards.length === 2
    && selectedCards[0] !== selectedCards[1]){
    selectedCards[0].remove();
    selectedCards[1].remove();
  }
}

function flipCard(card){
  card.classList.toggle('is-flipped');
}
