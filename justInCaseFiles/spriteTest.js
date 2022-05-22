

const canvas5 = document.getElementById('canvas5');
const ctx5 = canvas5.getContext('2d');
canvas5.width = 800;
canvas5.height = 600;

//Testing for sprites!!!
//Sprite sheet for ant going up and down
//I know the sprite sheets could be combined even if they're 
//irregular, but I don't have the time for that. Maybe later.
const antSprite2 = new Image();
antSprite2.src = 'assets/imgs/game-imgs/ANTS/ant-sprites-2.png'
const antSprite2Width = 21;
const antSprite2Height = 28;

//Sprite sheet for side to side
const antSprite1 = new Image();
antSprite1.src = 'assets/imgs/game-imgs/ANTS/ant-sprites-2.png'
const antSprite1Width = 28;
const antSprite1Height = 21;

//SPRITE VARAIBLES


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

//holds data for all animations for right/left movement
const spriteAnimations1 = [];
const animationStates1 = [
    {
        name: 'right',
        frames: 3,
    
    },
    {
        name: 'left',
        frames: 3,
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

//up/down
function animate(){
    //must clear before drawing
    ctx5.clearRect(0, 0, canvas5.width, canvas5.height);

    //6 because it's idle animation which has 6 frames
    //this line makes sure that variable only cycles between 0 and ending number
    //code used from https://www.youtube.com/watch?v=CY0HE277IBM&t=66s&ab_channel=Frankslaboratory
        //Time Stamp 25:37
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations2[playerState].loc.length;

    let frameX = antSprite2Width * position;
    let frameY = spriteAnimations2[playerState].loc[position].y;

        //make dw and dh same as sw and sh to get the actual size of the sprite
        //in x parameter, do a number * spriteWidth to move along the x line
        //in y parameter, do a number * spriteHeight to move along the y line
        //to cycle through X frames use frameX * spriteWidth
        //to cycle through Y frames use frame Y * spriteHeight
    ctx5.drawImage(antSprite2, frameX, frameY, antSprite2Width, antSprite2Height, 0, 0, antSprite2Width, antSprite2Height);
    
    //also needed for slowing down animation
    gameFrame++
        //calls function on loop
    requestAnimationFrame(animate);
};

animate();

