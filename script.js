//setting up file

const canvas = document.getElementById('canvas1');
//getContext is helpful for making games on canvas
const ctx1 = canvas.getContext('2d');
//setting canvas widths and heights as global variables
canvas.width = 600;
canvas.height = 600;

// More global variables
//grid needs explanation
const grid = 80;
//empty array to keep track of what keys are pressed
//this will be used for movement
let keys = [];
//speed of enemies?
let gameSpeed = 1;

//array for enemies
const enemyArray = [];

//Creates a new image based on URL. This will be used to
//create the player ant, enemies, and objects. 
//Code used from JS-Webgame Activity
const newImage = (url) => {
    let image = document.createElement('img') //creates the img
    image.src = url //gets the images url or relative path
    document.body.append(image) //adds image to the body
    return image
}


function animate(){
     //clears canvas
    //if this isn't set, the item will just keep getting longer
    //instead of moving
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
    handleEnemies();
    //creates animation loop on recursion
    //calls itself over and over
    requestAnimationFrame(animate);
}

//Moves image to left and bottom coordinates
// move(newImage('imgs/game-imgs/ANTS/ant-walk-south.gif')).to(400, 250)

// move(newImage('imgs/game-imgs/ANTS/ant-walk-north.gif')).to(100, 200)

