function MemoryCardGame(){
  createTable();
}
MemoryCardGame();

function renderCellText(cellContent) {
  let newCell1 = document.createElement('td');
  newCell1.innerText = cellContent;
  return newCell1;
}

function createTable() {
  const table = document.getElementById('cards');

  for (let i = 0; i < 6; i++){
    let newRow = document.createElement('tr');
    for (var j = 0; j < 5; j++) {
        var td = document.createElement('td');
        let div = document.createElement('div');
        div.id = 'back';
        div.className = 'card';
        td.append(div);
        newRow.appendChild(td)
    }
    let div = document.createElement('div');
    newRow.append(div);
    table.append(newRow);
  }
}