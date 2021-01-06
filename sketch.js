var canvas, backgroundImage;

var distance = 0;
var gameState = 0;
var playerCount;

var database;

var form, player, game;
var playerInfo, plr;

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  if(gameState === 1) {
    game.play();
  }
  if(playerCount===4) {
    game.update(1);
  }
}
