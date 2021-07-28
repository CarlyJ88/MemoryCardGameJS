function MemoryCardGame() {
  createTable(getImage());
  var cards = document.getElementsByClassName('card');
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function (e) {
      e.currentTarget.classList.toggle('is-flipped');
    }, false);
  }
}
MemoryCardGame();

function createTable(images) {
  const table = document.getElementById('cards');

  for (let i = 0; i < 6; i++) {
    let newRow = document.createElement('tr');
    for (var j = 0; j < 6; j++) {
      var td = document.createElement('td');
      td.className = 'scene';

      let div = document.createElement('div');
      div.className = 'card'
      div.append(createDiv('front', 6 * i + j))
      div.append(createDiv('back', 6 * i + j, images))

      td.append(div);

      newRow.appendChild(td)
    }
    table.append(newRow);
  }
}

function createDiv(side, id, images) {
  let div = document.createElement('div');
  div.id = side + id;
  div.className = 'card__face card__face--' + side;

  if (side === 'back'){
    let image = document.createElement("img");
    // for (let i = 0; i < images.length; i++){
      image.src = images[id];
    // }
    div.appendChild(image);
  }
  return div
}

function getImage(){
  let images = ["images/air.png", "images/copy.jpeg", "images/cylindar.png", "images/earth.png", "images/fire.png", "images/infinity.jpeg",
   "images/monitor.png", "images/moon.png", "images/noentry.png", "images/paperclip.png", "images/recycle.png", "images/ruby.png", 
   "images/star.png", "images/sun.png", "images/toxic.png", "images/unity.png", "images/water.png", "images/yinyang.png"]
   images = images.concat(images);
   images.sort(() => Math.random() - 0.5)
   console.log(images, 'images')
   return images;
}
