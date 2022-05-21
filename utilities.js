function gameStart(){
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
}

// Button event to start the game
let startButton = document.getElementById('startButton');
startButton.addEventListener('click', function(){
    let start = document.getElementById('main-menu');
    let wrapper = document.querySelector('.wrapper');
    start.style.display = 'none';
    wrapper.style.display = 'block';
    gameStart();
})

//Button for instructions
let infoButton = document.getElementById('infoButton');
infoButton.addEventListener('click', function(){
    let start = document.getElementById('main-menu');
    let info = document.getElementById('instructions');
    start.style.display = 'none';
    info.style.display = 'block';

    let goBackButton = document.getElementById('goBack');
    goBackButton.addEventListener('click', function(){
        start.style.display = 'block';
        info.style.display = 'none';
    })
})

//Button for known issues
let issuesButton = document.getElementById('issuesButton');
issuesButton.addEventListener('click', function(){
    let start = document.getElementById('main-menu');
    let issues = document.getElementById('issues');
    start.style.display = 'none';
    issues.style.display = 'block';

    let goBackButton = document.getElementById('goBack');
    goBackButton.addEventListener('click', function(){
        start.style.display = 'block';
        info.style.display = 'none';
    })
})


