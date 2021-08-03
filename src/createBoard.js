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
