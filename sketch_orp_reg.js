var backgroundImage;
var gameState = 0;
var playerCount;
var database;
var orp;
var player, form_orp, form_user,form_fundingreq, pay_form_display;
var orp_name, reg_button, pay_form_display;

function setup(){
  createCanvas(1400, 600);
  orp = new Orp();
  orp.start();
}

function draw()
{}

