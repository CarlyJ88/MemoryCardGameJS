function MemoryCardGame() {
  createTable();
  var cards = document.getElementsByClassName('card');
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function (e) {
      e.currentTarget.classList.toggle('is-flipped');
    }, false);
  }
}
MemoryCardGame();

function createTable() {
  const table = document.getElementById('cards');

  for (let i = 0; i < 6; i++) {
    let newRow = document.createElement('tr');
    for (var j = 0; j < 6; j++) {
      var td = document.createElement('td');
      td.className = 'scene';

      let div = document.createElement('div');
      div.className = 'card'
      div.append(createDiv('front', 6 * i + j))
      div.append(createDiv('back', 6 * i + j))

      td.append(div);

      newRow.appendChild(td)
    }
    table.append(newRow);
  }
}

function createDiv(side, id) {
  let div = document.createElement('div');
  div.id = side + id;
  div.className = 'card__face card__face--' + side;
  return div
}
