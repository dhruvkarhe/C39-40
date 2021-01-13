var database;

var gameState = 0;
var playerCount;
var form, player, game, allPlayers;
var distance = 0;
var car1;
var car2;
var car3;
var car4;
var cars;
var trackImage, car1Image, car2Image, car3Image, car4Image, groundImage;

function preload() {
  trackImage = loadImage("images/track.jpg");
  car1Image = loadImage("images/car1.png");
  car2Image = loadImage("images/car2.png");
  car3Image = loadImage("images/car3.png");
  car4Image = loadImage("images/car4.png");
}
function setup() {
  createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  console.log(database);
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background("white");
  if (playerCount === 4) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
  }
  if (gameState === 2) {
    game.end();
  }
  //drawSprites();
}
