// Ant goes on layer 3

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
        this.direction = null;
    };

    //places ant
    place(){
        ctx3.fillStyle = 'burlywood';
        ctx3.fillRect(this.x, this.y, this.width, this.height);
        //antSprite image, coords, width/height
        ctx3.drawImage(antSprite, this.x, this.y, this.width, this.height);
    }

    //Probably a better way to do the right and down
    //movements instead of a specific number. 
    //Check the frogger game later, but this
    //works for now.

    //movement controls
    movementControls(){
        //ant can move left as long as its
        //x position is greater than 0
        if(this.direction === 'left' && this.x > 0){
            this.x-=5;
        //ant can move right as long as its
        //x position is less than 780
        } if(this.direction === 'right' && this.x < 780){
            this.x+=5;
        //ant can move up as long as its
        //y position is greater than 0
        } if(this.direction === 'up' && this.y > 0){
            this.y-=5;
        //ant can move down as long as its
        //y position is less than 570
        } if(this.direction === 'down' && this.y < 570){
            this.y+=5;
        }
    }   
    
}

//keyboard controls
document.addEventListener('keydown', function(e){
    //just to prevent the keys from doing
    //anything else, like scrolling the page down
    //Probably not necessary since the window doesn't
    //have a scroll bar, but it probably can't hurt
    e.preventDefault();
    //if key is held down, ant keeps moving
    if(e.repeat) return;

    if(e.key === 'ArrowLeft'){
        antPC.direction = 'left';
    }
    if(e.key === 'ArrowRight'){
        antPC.direction = 'right';
    }
    if(e.key === 'ArrowUp'){
        antPC.direction = 'up';
    }

    if(e.key === 'ArrowDown'){
        antPC.direction = 'down';
    }

})
document.addEventListener('keyup', function(e){
    antPC.direction = '';
})

// functions for placeFood and collectFood combined
function handleAnt(){
    antPC.place();
    antPC.movementControls();


}



//creates new ant
const antPC = new Ant();


