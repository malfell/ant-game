// Movement functions taken from JS-Webgame-Activity
// Will need reworking! Need to have ant static in multiple positions!
//Or maybe there's a way to freeze the gif when not moving?
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
            if(direction === 'west'){
                x-=1
            }

            if(direction === 'north'){
                y+=1
            }

            if(direction === 'east'){
                x+=1
            }

            if(direction === 'south'){
                y-=1
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }
        //calls move function every millisecond
        setInterval(moveCharacter, 1)

        // Click arrow keys for movement! "e" needed for checking
        //which key was pressed. When keys are pressed, element moves.
        document.addEventListener('keydown', function(e){
            //let user hold down key to keep movement happening
            if(e.repeat) return;
            //match directions with appropriate arrowkeys
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
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
const character = newImage('imgs/game-imgs/ANTS/ant-static-south.png')

//changes character appearance based on direction. 
//Direction parameter needed to connect scope to move function
//in move.js
function handleDirectionChange(direction){
    //null for no chosen direction
    // if(direction === null){
    //     character.src = 'imgs/game-imgs/ANTS/ant-static-south.png'
    // }
    if(direction === 'west'){
        character.src = 'imgs/game-imgs/ANTS/ant-walk-west.gif'
        // When key stops being pressed, the ant image will become
        //the static version of the gif.
        //Current issue is that if there's a quick click, there
        //won't be animation. Ant will just slide.
        document.addEventListener('keyup', function(){
            character.src = 'imgs/game-imgs/ANTS/ant-static-west.png'
        })
    }
    if(direction === 'north'){
        character.src = 'imgs/game-imgs/ANTS/ant-walk-north.gif'
        document.addEventListener('keyup', function(){
            character.src = 'imgs/game-imgs/ANTS/ant-static-north.png'
        })
    }
    if(direction === 'east'){
        character.src = 'imgs/game-imgs/ANTS/ant-walk-east.gif'
        document.addEventListener('keyup', function(){
            character.src = 'imgs/game-imgs/ANTS/ant-static-east.png'
        })
    }
    if(direction === 'south'){
        character.src = 'imgs/game-imgs/ANTS/ant-walk-south.gif'
        document.addEventListener('keyup', function(){
            character.src = 'imgs/game-imgs/ANTS/ant-static-south.png'
        })
    }
}


move(character).withArrowKeys(100, 250, handleDirectionChange)
