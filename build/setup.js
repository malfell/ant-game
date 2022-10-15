"use strict";
//setting up canvas
//background layer
var canvas = document.getElementById('canvas1');
var ctx1 = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
//ant sprite layer
var canvas2 = document.getElementById('canvas2');
var ctx2 = canvas2.getContext('2d');
canvas2.width = 800;
canvas2.height = 600;
//anthill & food layer
var canvas3 = document.getElementById('canvas3');
var ctx3 = canvas3.getContext('2d');
canvas3.width = 800;
canvas3.height = 600;
//enemy layer
var canvas4 = document.getElementById('canvas4');
var ctx4 = canvas4.getContext('2d');
canvas4.width = 800;
canvas4.height = 600;
//global variables
//grid is 80 pixels, accounts for movement at a time
var grid = 80;
var keys = [];
var score = 0;
//movement speed for enemies
var gameSpeed = 1;
var enemiesArray = [];
var foodArray = [];
//sets gameRestart variable to false
//when gameRestart variable is true, the gameStart function
//will be set to "return" and stop the function.
var gameRestart = false;
//creating initial images and changing src name to something shorter
//ant sprite
var antSprite = new Image();
antSprite.src = 'assets/imgs/game-imgs/ANTS/ant-static-south.png';
//food sprite
var foodSprite = new Image();
foodSprite.src = 'assets/imgs/game-imgs/food-sprite.png';
//anthill sprite
var anthillSprite = new Image();
anthillSprite.src = 'assets/imgs/game-imgs/anthill-sprite.png';
//spider sprite
var spiderSprite = new Image();
spiderSprite.src = 'assets/imgs/game-imgs/spider-sprite.png';
