//setting up canvas
//background layer
const canvas = document.getElementById('canvas1');
const ctx1 = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

//ant sprite layer
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
canvas2.width = 800;
canvas2.height = 600;

//anthill & food layer
const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
canvas3.width = 800;
canvas3.height = 600;

//enemy layer
const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas4.getContext('2d');
canvas4.width = 800;
canvas4.height = 600;

const canvas5 = document.getElementById('canvas5');
const ctx5 = canvas5.getContext('2d');
canvas5.width = 800;
canvas5.height = 600;

//global variables
//grid is 80 pixels, accounts for movement at a time
const grid = 80;
let keys = [];
let score = 0;
let collisionsCount = 0;
let frame = 0;
let gameSpeed = 1;

const enemiesArray = [];

//creating initial images and changing src name to something shorter
//ant sprite
const antSprite = new Image();
antSprite.src = 'assets/imgs/game-imgs/ANTS/ant-static-south.png'

//food sprite
const foodSprite = new Image();
foodSprite.src = 'assets/imgs/game-imgs/food-sprite.png'

//anthill sprite
const anthillSprite = new Image()
anthillSprite.src = 'assets/imgs/game-imgs/anthill-sprite.png'

