function MemoryCardGame() {
  createBoard(getCards());
  var cards = document.getElementsByClassName('card'); // reference to the div which contains a front/back div which contains an img
  let selectedCards = [];
  
  for (var i = 0; i < cards.length; i++) { // iterate through divs
    cards[i].addEventListener('click', function (e) { // listen on each div
      const currentCard = e.currentTarget;
      if (selectedCards.length < 3) { // if there are no more than two images clicked
        flipCard(currentCard); // flip the card on each click
        selectedCards.push(currentCard) // add an image to the selectedCards array to show how many images have been clicked
        if (selectedCards.length === 2) { // if two images have been clicked
          isAMatch(selectedCards) // ask if the images are a match
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
  const board = document.getElementById('board'); // get table
  
  for (let rowIndex = 0; rowIndex < 6; rowIndex++) { // do 6 times
    const row = document.createElement('tr'); // make a row (6 times)
    
    for (let columnIndex = 0; columnIndex < 6; columnIndex++) { // do 6 times
      const cardId = 6 * rowIndex + columnIndex;

      const cell = document.createElement('td'); // make a cell
      cell.className = 'cell'; // set cell name to 'scene'

      let div = document.createElement('div'); // make a div (for the front and back cards to go in)
      div.className = 'card' // set div name to 'card'
      div.append(createCard('front', cardId)) // 
      div.append(createCard('back', cardId, cards))

      cell.append(div);

      row.appendChild(cell)
    }
    board.append(row);
  }
}

function createCard(side, id, images) {
  let card = document.createElement('div');
  card.id = side + id; // add id for div
  card.className = 'card__face card__face--' + side; // add classname for div

  if (side === 'back') { // if current side is the back of the card
    let image = document.createElement("img"); // create img tag
    image.src = images[id]; // pass an image to the src of img tag
    card.appendChild(image); // attach img tag to the div
  }
  return card;
}

function getCards() {
  let images = ["images/air.png", "images/copy.jpeg", "images/cylindar.png", "images/earth.png", "images/fire.png", "images/infinity.jpeg",
    "images/monitor.png", "images/moon.png", "images/noentry.png", "images/paperclip.png", "images/recycle.png", "images/ruby.png",
    "images/star.png", "images/sun.png", "images/toxic.png", "images/unity.png", "images/water.png", "images/yinyang.png"
  ]
  images = images.concat(images); // create two of each image
  images.sort(() => Math.random() - 0.5) // randomise position of images
  return images;
}

function isAMatch(selectedCards) {
  if (selectedCards[0].getElementsByClassName('card__face card__face--back')[0].innerHTML === selectedCards[1].getElementsByClassName('card__face card__face--back')[0].innerHTML && selectedCards.length === 2
    && selectedCards[0] !== selectedCards[1]){ // if first image and second image are the same // need to add these into variables or use a better selector and put in variables
    console.log('match')
    selectedCards[0].remove();
    selectedCards[1].remove();
  }
}

function flipCard(card){
  card.classList.toggle('is-flipped');
}
