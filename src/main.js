function MemoryCardGame() {
  createBoard(getCards());
  runGame();
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

MemoryCardGame();
