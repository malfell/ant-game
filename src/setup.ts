//setting up canvas

//background layer
const canvas = document.getElementById('canvas1') as HTMLCanvasElement;
const ctx1 = canvas.getContext('2d') as CanvasRenderingContext2D;

canvas.width = 800;
canvas.height = 600;

//ant sprite layer
const canvas2 = document.getElementById('canvas2') as HTMLCanvasElement;
const ctx2 = canvas2.getContext('2d') as CanvasRenderingContext2D;
canvas2.width = 800;
canvas2.height = 600;

//anthill & food layer
const canvas3 = document.getElementById('canvas3') as HTMLCanvasElement;
const ctx3 = canvas3.getContext('2d') as CanvasRenderingContext2D;
canvas3.width = 800;
canvas3.height = 600;

//enemy layer
const canvas4 = document.getElementById('canvas4') as HTMLCanvasElement;
const ctx4 = canvas4.getContext('2d') as CanvasRenderingContext2D;
canvas4.width = 800;
canvas4.height = 600;

//global variables
//grid is 80 pixels, accounts for movement at a time
const grid = 80;
let keys = [];
let score = 0;

//movement speed for enemies
let gameSpeed = 1;

const enemiesArray: Enemy[] = [];
const foodArray: Food[] = [];

//sets gameRestart variable to false
//when gameRestart variable is true, the gameStart function
//will be set to "return" and stop the function.
let gameRestart = false;

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

//spider sprite
const spiderSprite = new Image();
spiderSprite.src = 'assets/imgs/game-imgs/spider-sprite.png'
