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
    ctx3.fillStyle = 'blue';
    ctx3.fillRect(this.x, this.y, this.width, this.height);
    //antSprite image, coords, width/height
    let antTest = ctx3.drawImage(antSprite, this.x, this.y, this.width, this.height);
    
  };
  
  // MOVEMENT??
  //defining directions
  move(){
    if(this.direction === 'west'){
        this.x-=0.7
    }
  
    if(this.direction === 'north'){
        this.y+=.7
    }
  
    if(this.direction === 'east'){
        this.x+=.7
    }
  
    if(this.direction === 'south'){
        this.y-=.7
    }
  
  }
  
  keyGoesDown(){
    // Click arrow keys for movement! "e" needed for checking
    //which key was pressed. When keys are pressed, element moves.
    document.addEventListener('keydown', function(e){
        //let user hold down key to keep movement happening
        if(e.repeat) return;
        //match directions with appropriate arrowkeys
        if(e.key === 'ArrowLeft'){
            this.direction = 'west'
            console.log('w')
        }
        if(e.key === 'ArrowUp'){
            this.direction = 'north'
            console.log('n')
        }
  
        if(e.key === 'ArrowRight'){
            this.direction = 'east'
            console.log('e')
        }
        if(e.key === 'ArrowDown'){
            this.direction = 'south'
            console.log('s')
        }
        
        // callback(this.direction)
    })
  
  }
  
  keyGoesUp(){
    // When no keys are pressed, the thing
    //stays still
    document.addEventListener('keyup', function(e){
        this.direction = null
        // callback(this.direction)
    })
  }
  
  handleDirectionChange(){
    if(this.direction === 'west'){
        antSprite.src = 'assets/imgs/game-imgs/ANTS/ant-walk-west.gif'
        // When key stops being pressed, the ant image will become
        //the static version of the gif.
        //Current issue is that if there's a quick click, there
        //won't be animation. Ant will just slide.
        document.addEventListener('keyup', function(){
            antSprite.src = 'assets/imgs/game-imgs/ANTS/ant-static-west.png'
        })
    }
    if(this.direction === 'north'){
        antSprite.src = 'assets/imgs/game-imgs/ANTS/ant-walk-north.gif'
        document.addEventListener('keyup', function(){
            antSprite.src = 'assets/imgs/game-imgs/ANTS/ant-static-north.png'
        })
    }
    if(this.direction === 'east'){
        antSprite.src = 'assets/imgs/game-imgs/ANTS/ant-walk-east.gif'
        document.addEventListener('keyup', function(){
            antSprite.src = 'assets/imgs/game-imgs/ANTS/ant-static-east.png'
        })
    }
    if(this.direction === 'south'){
        antSprite.src = 'assets/imgs/game-imgs/ANTS/ant-walk-south.gif'
        document.addEventListener('keyup', function(){
            antSprite.src = 'assets/imgs/game-imgs/ANTS/ant-static-south.png'
        })
    }
  }
}


// functions for placeFood and collectFood combined
function handleAnt(){
    antPC.place();
    antPC.move();
    antPC.keyGoesDown();
    antPC.keyGoesUp();
    antPC.handleDirectionChange();

    


}

//creates new ant
const antPC = new Ant();


