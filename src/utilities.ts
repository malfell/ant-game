function gameStart(){
    //whenever gameRestart becomes "true," which happens
    //on the lose and win conditions, the function will stop
    //if code ends up breaking, then remove this part and the
    //gameRestart variables from detectCollision and setup
    // if(gameRestart){
    //     return;
    // }
    // else {
        //clears canvas. If this isn't set, then items will
        //grow long across the screen. Not ideal. 
        ctx1.clearRect(0, 0, canvas.width, canvas.height);
        //clears food and anthill (or it would, but not 
        //really necessary since they don't move)
        //maybe remove this later?
        ctx2.clearRect(0, 0, canvas.width, canvas.height);
        handleFood();
        handleAnthill();
        //clears ant sprite
        ctx3.clearRect(0, 0, canvas.width, canvas.height);
        handleAnt();
        //clears enemies
        ctx4.clearRect(0, 0, canvas.width, canvas.height);
        handleEnemies();

        //creates animation loop on recursion
        //calls itself over and over
        requestAnimationFrame(gameStart);
    // }
}



//all screen variables for switching screens
let start: any = document.getElementById('main-menu');
let wrapper: any = document.querySelector('.wrapper');
let info: any = document.getElementById('instructions');
let issues: any = document.getElementById('issues');


// Button event to start the game
let startButton: any = document.getElementById('startButton');
startButton.addEventListener('click', function(){
    start.style.display = 'none';
    wrapper.style.display = 'block';
    //sets gameRestart variable to false, so that the gameStart()
    //function can run again (and then hopefully restart properly)
    // gameRestart = false;
    gameStart();
})

//Button for instructions
let infoButton: any = document.getElementById('infoButton');
infoButton.addEventListener('click', function(){
    start.style.display = 'none';
    info.style.display = 'block';
    let goBackButton1: any = document.getElementById('goBack1');
    goBackButton1.addEventListener('click', function(){
        start.style.display = 'block';
        info.style.display = 'none';
    })

})

//Button for known issues
let issuesButton: any = document.getElementById('issuesButton');
issuesButton.addEventListener('click', function(){
    start.style.display = 'none';
    issues.style.display = 'block';
    // I know there's a better way to make both goBack buttons
    //work for the same button, like maybe using forEach() from
    //what I vaguely Googled. I'm just not having enough time
    //so I'm going for what is functional.
    let goBackButton2: any = document.getElementById('goBack2');
    goBackButton2.addEventListener('click', function(){
        start.style.display = 'block';
        issues.style.display = 'none';
    })
})

