// General functions taken from JS-Webgame-Activity

function move(element) {
    element.style.position = 'fixed' //fixes the position of image

    function moveToCoordinates(left, bottom) {
        //Moves image specified number of pixels from left of screen
        element.style.left = left + 'px'
        //Moves image specified number of pixels from bottom of screen
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, callback){
        let direction = null; //direction has to be null? So it can change?
        let x = left; //current position for thing
        let y = bottom;

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'

        // Function to move the element
        //Define directions
        function moveCharacter(){
            //Slowed movement speed. "1" felt a little fast
            //and hard to see the ant.
            if(direction === 'west'){
                x-=.7
            }

            if(direction === 'north'){
                y+=.7
            }
            if(direction === 'northWest'){ //COME BACK TO THIS. DIAGONAL NOT WORKING
                y+=.7
                x-=.7
            }

            if(direction === 'east'){
                x+=.7
            }

            if(direction === 'south'){
                y-=.7
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }
        //calls move function every millisecond
        setInterval(moveCharacter, 1)

        //This object catches multiple key presses to allow
        //for diagonal movement 
        //NOT WORKING. COME BACK TO THIS. 
        let keysPressed = {}
        // Click arrow keys for movement! "e" needed for checking
        //which key was pressed. When keys are pressed, element moves.
        document.addEventListener('keydown', function(e){
            //DIAGONAL NOT WORKING! COME BACK TO THIS!
            keysPressed[e.key] = true;
            //let user hold down key to keep movement happening
            if(e.repeat) return;
            //match directions with appropriate arrowkeys
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }

            //DIAGONAL NOT WORKING. COME BACK THIS!!!
            if(e.key === 'ArrowUp' && e.key === 'ArrowLeft'){
                direction = 'northWest'
            }

            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
            
            callback(direction)
        })

        // When no keys are pressed, the thing
        //stays still
        document.addEventListener('keyup', function(e){
            direction = null
            callback(direction)
        })

        //DIAGONAL STUFF NOT WORKING??
        // https://www.gavsblog.com/blog/detect-single-and-multiple-keypress-events-javascript
        document.addEventListener('keyup', (e) => {
            delete keysPressed[e.key];
         });
    }

    return {
        //Defines "to" as a property of moveToCoords allowing it to be 
        //accessible outside of the move function
        //Can be called as move(newImage(url).to(left, bottom))
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}

// ///////////////////
const character = newImage('assets/imgs/game-imgs/ANTS/ant-static-south.png')

//changes character appearance based on direction. 
//Direction parameter needed to connect scope to move function
//in move.js
function handleDirectionChange(direction){
    //null for no chosen direction
    // if(direction === null){
    //     character.src = 'imgs/game-imgs/ANTS/ant-static-south.png'
    // }
    if(direction === 'west'){
        character.src = 'assets/imgs/game-imgs/ANTS/ant-walk-west.gif'
        // When key stops being pressed, the ant image will become
        //the static version of the gif.
        //Current issue is that if there's a quick click, there
        //won't be animation. Ant will just slide.
        document.addEventListener('keyup', function(){
            character.src = 'assets/imgs/game-imgs/ANTS/ant-static-west.png'
        })
    }
    if(direction === 'north'){
        character.src = 'assets/imgs/game-imgs/ANTS/ant-walk-north.gif'
        document.addEventListener('keyup', function(){
            character.src = 'assets/imgs/game-imgs/ANTS/ant-static-north.png'
        })
    }

    //DIAGONAL NOT WORKING. COME BACK TO THIS. 
    if(direction === 'northWest'){
        character.src = 'assets/imgs/game-imgs/ANTS/ant-walk-north-west.gif'
        document.addEventListener('keyup', function(){
            character.src = 'assets/imgs/game-imgs/ANTS/ant-static-north-west.png'
        })
    }

    if(direction === 'east'){
        character.src = 'assets/imgs/game-imgs/ANTS/ant-walk-east.gif'
        document.addEventListener('keyup', function(){
            character.src = 'assets/imgs/game-imgs/ANTS/ant-static-east.png'
        })
    }
    if(direction === 'south'){
        character.src = 'assets/imgs/game-imgs/ANTS/ant-walk-south.gif'
        document.addEventListener('keyup', function(){
            character.src = 'assets/imgs/game-imgs/ANTS/ant-static-south.png'
        })
    }
}


move(character).withArrowKeys(100, 250, handleDirectionChange)

//added ant hill
move(newImage('assets/imgs/game-imgs/anthill-sprite.png')).to(500, 350)