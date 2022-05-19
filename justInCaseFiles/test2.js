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
    place(sprite){
        //placeholder hitbox
        ctx3.fillStyle = 'blue';
        ctx3.fillRect(this.x, this.y, this.width, this.height);
        //is this needed?
        sprite.style.position = 'fixed'
        //antSprite image, coords, width/height
        ctx3.drawImage(sprite, this.x, this.y, this.width, this.height);
        
        function moveToCoordinates(left, bottom) {
            //Moves image specified number of pixels from left of screen
            sprite.style.left = left + 'px'
            //Moves image specified number of pixels from bottom of screen
            sprite.style.bottom = bottom + 'px'
        }

        function moveWithArrowKeys(left, bottom, callback){
            let direction = null; //direction has to be null? So it can change?
            let x = left; //current position for thing
            let y = bottom;
    
            sprite.style.left = x + 'px'
            sprite.style.bottom = y + 'px'

            // MOVEMENT??
            //defining directions
            function move(){
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
                //needed because ant will run but not
                //actually go anywhere
                sprite.style.left = x + 'px'
                sprite.style.bottom = y + 'px'
            }
            //calls move function every millisecond
            setInterval(antPC.move, 1)

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
            
            callback(this.direction)
        })

        // When no keys are pressed, the thing
        //stays still
        document.addEventListener('keyup', function(e){
            direction = null
            callback(direction)
        })
        
    };

    return {
        //Defines "to" as a property of moveToCoords allowing it to be 
        //accessible outside of the move function
        //Can be called as move(newImage(url).to(left, bottom))
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }

    

    };
}


function handleDirectionChange(direction){
        if(antPC.direction === 'west'){
            antSprite.src = 'assets/imgs/game-imgs/ANTS/ant-walk-west.gif'
            // When key stops being pressed, the ant image will become
            //the static version of the gif.
            //Current issue is that if there's a quick click, there
            //won't be animation. Ant will just slide.
            document.addEventListener('keyup', function(){
                antSprite.src = 'assets/imgs/game-imgs/ANTS/ant-static-west.png'
            })
        }
        if(antPC.direction === 'north'){
            antSprite.src = 'assets/imgs/game-imgs/ANTS/ant-walk-north.gif'
            document.addEventListener('keyup', function(){
                antSprite.src = 'assets/imgs/game-imgs/ANTS/ant-static-north.png'
            })
        }
        if(antPC.direction === 'east'){
            antSprite.src = 'assets/imgs/game-imgs/ANTS/ant-walk-east.gif'
            document.addEventListener('keyup', function(){
                antSprite.src = 'assets/imgs/game-imgs/ANTS/ant-static-east.png'
            })
        }
        if(antPC.direction === 'south'){
            antSprite.src = 'assets/imgs/game-imgs/ANTS/ant-walk-south.gif'
            document.addEventListener('keyup', function(){
                antSprite.src = 'assets/imgs/game-imgs/ANTS/ant-static-south.png'
            })
        }
}


// functions for placeFood and collectFood combined
function handleAnt(){
    antPC.place(antSprite).withArrowKeys(100, 250, handleDirectionChange);


    


}

//creates new ant
const antPC = new Ant();


