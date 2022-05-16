function gameStart(){
    //clears canvas. If this isn't set, then items will
    //grow long across the screen. Not ideal. 
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
    //clears food and anthill (or it would, but not 
    //really necessary since they don't move)
    //maybe remove this later?
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    handleFood();
    //clears ant sprite
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    //clears enemies
    ctx4.clearRect(0, 0, canvas.width, canvas.height);
    handleEnemies();

    //creates animation loop on recursion
    //calls itself over and over
    requestAnimationFrame(gameStart);
}

gameStart();