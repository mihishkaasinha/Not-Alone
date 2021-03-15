var backgroundImage;
var gameState = 0;
var playerCount;
var database;
var user;
var player, form_orp, form_user,form_fundingreq;
var orp_name;

function setup(){
  createCanvas(1400, 600);
  user = new User();
  user.start();
}

function draw()
{}