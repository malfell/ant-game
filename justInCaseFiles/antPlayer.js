// Ant goes on layer 3

//animation state of the player
let playerState = 'down';

//Sprite sheet for ant going up and down
//I know the sprite sheets could be combined even if they're 
//irregular, but I don't have the time for that. Maybe later.
const antSprite2 = new Image();
antSprite2.src = 'assets/imgs/game-imgs/ANTS/ant-sprites-2.png'
const antSprite2Width = 21;
const antSprite2Height = 28;

//variables for sprite animation and slowing down the animation
let gameFrame = 0;
//changes ant animation speed
const staggerFrames = 7;

//holds data for all animations for up/down movement
const spriteAnimations2 = [];
const animationStates2 = [
    {
        name: 'up',
        frames2: 3,
    
    },
    {
        name: 'down',
        frames2: 3,
    }
];

// Up/down sprite
//Code used from here https://www.youtube.com/watch?v=CY0HE277IBM&t=66s&ab_channel=Frankslaboratory
//Time Stamp: 35:00ish 
animationStates2.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    //calculates position x and y for each frame
    for(let i = 0; i < state.frames2; i++){
        let positionX = i * antSprite2Width;
        let positionY = index * antSprite2Height;
        //pushes values into location array
        //then it will run through all frames in the row
        frames.loc.push({x: positionX, y: positionY})
    }
    spriteAnimations2[state.name] = frames;
});


class Ant {
    constructor(){
        // Initial position for the ant
        this.x = 420;
        this.y = 340;
        //height/width of up/down sprite
        this.width = 21;
        this.height = 28;
        //stops sprite from moving right away
        this.moving = false;
        //set direction to null? 
        //Then there'll be a static 
        //image when ant isn't moving 
        // this.direction = null;
        //animation frames. These frames will change, and
        //sprite will animate.
        this.framex = 0;
        this.framey = 0;
    };

    //animates ant
    animate(){
        //must clear before drawing
        ctx3.clearRect(0, 0, canvas.width, canvas.height);
        // ctx3.fillStyle = 'burlywood';
        // ctx3.fillRect(this.x, this.y, this.width, this.height);

        //this line makes sure that variable only cycles between 0 and ending number
        //code used from https://www.youtube.com/watch?v=CY0HE277IBM&t=66s&ab_channel=Frankslaboratory
            //Time Stamp 25:37
        let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations2[playerState].loc.length;

        let frameX = antSprite2Width * position;
        let frameY = spriteAnimations2[playerState].loc[position].y;


        //antSprite image, coords, width/height
        ctx3.drawImage(antSprite2, frameX, frameY, antSprite2Width, antSprite2Height, 0, 0, antSprite2Width, antSprite2Height);

        //also needed for slowing down animation
        gameFrame++
        //calls function on loop
        requestAnimationFrame(antPC.animate);
    }

    //Probably a better way to do the right and down
    //movements instead of a specific number. 
    //Check the frogger game later, but this
    //works for now.

    //movement controls
    movementControls(){
        //ant can move left as long as its
        //x position is greater than 0
        // if(this.direction === 'left' && this.x > 0){
        //     this.x-=2;
        // //ant can move right as long as its
        // //x position is less than 780
        // } if(this.direction === 'right' && this.x < 780){
        //     this.x+=2;
        // //ant can move up as long as its
        // //y position is greater than 0
        // } 
        if(playerState === 'up' && this.y > 0){
            this.y-=2;
        //ant can move down as long as its
        //y position is less than 570
        } if(playerState === 'down' && this.y < 570){
            this.y+=2;
        }
    }   
    
}

//keyboard controls
function movePlayer(player){
    document.addEventListener('keydown', function(e){
    //just to prevent the keys from doing
    //anything else, like scrolling the page down
    //Probably not necessary since the window doesn't
    //have a scroll bar, but it probably can't hurt
    e.preventDefault();
    //if key is held down, ant keeps moving
    if(e.repeat) return;

    if(e.key === 'ArrowLeft'){
        player.direction = 'left';
    }
    if(e.key === 'ArrowRight'){
        player.direction = 'right';
    }
    if(e.key === 'ArrowUp'){
        player.direction = 'up';

    }

    if(e.key === 'ArrowDown'){
        player.direction = 'down';

    }

})
document.addEventListener('keyup', function(e){
    player.direction = '';
})
}




// functions for placeFood and collectFood combined
function handleAnt(){
    antPC.animate();
    antPC.movementControls();
    movePlayer(antPC);




}



//creates new ant
const antPC = new Ant();


