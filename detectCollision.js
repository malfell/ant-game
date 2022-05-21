// collision detection between two rectangles
//function must return true or false
function collision(first, second){
    //exclamation mark operator returns the opposite
    //if any statement is true, then function will just
    //return true. So collision function needs to return
    //one of these are false
    //video 57:00
    //find timestamp and exact link
    return !(first.x > second.x + second.width ||
        first.x + first.width < second.x ||
        first.y > second.y + second.height ||
        first.y + first.height < second.y);
}

//when ant is hit, the game will be over
function gameOver(){
    alert('Game Over')
}