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
    //game over variables
    //need to fix playAgain button
    // let playAgain = document.getElementById('playAgainButton');
    let goBack = document.getElementById('goBack3');
    let gameOverScreen = document.getElementById('game-over');
    let wrapper = document.querySelector('.wrapper');
    let start = document.getElementById('main-menu');
    //switches to Game Over screen
    wrapper.style.display = 'none';
    gameOverScreen.style.display = 'block';

    //lets user play again
    //Need to find another method for restarting the game
    //This just covers and uncovers the screen basically
    // playAgain.addEventListener('click', function(){
    //     wrapper.style.display = 'block';
    //     gameOverScreen.style.display = 'none';

    // })

    //lets user return to main menu
    goBack.addEventListener('click', function(){
        start.style.display = 'block';
        gameOverScreen.style.display = 'none';
        //reloads the page to return to main menu
        //Otherwise, the game will still be playing
        //Will need to come back to this and get a way
        //for the gameStart() function to actually restart.
        location.reload();
    })


}