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
        // ctx3.fillStyle = 'burlywood';
        // ctx3.fillRect(this.x, this.y, this.width, this.height);
        //antSprite image, coords, width/height
        ctx3.drawImage(antSprite, this.x, this.y, this.width, this.height);
    }

    //movement controls
    movementControls(){
        if(this.direction === 'left'){
            this.x-=5;
        } if(this.direction === 'right'){
            this.x+=5;
        } if(this.direction === 'up'){
            this.y-=5;
        } if(this.direction === 'down'){
            this.y+=5;
        }
    }   
    
}

//keyboard controls
document.addEventListener('keydown', function(e){
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


