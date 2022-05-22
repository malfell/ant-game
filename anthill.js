//layer 2

//I don't know if there'll be a situation where I could need
//more than one anthill, but I figure it can't hurt to have
//the possibility open
class Anthill {
    constructor(){
        //placement of anthill
        this.x = 400;
        this.y = 300;
        //width and height of anthill
        //consistent type for now
        this.width = 58;
        this.height = 33;
    }

    //places the anthill
    place(){
        // hitbox 
        // ctx2.fillStyle = 'cornflowerblue';
        // ctx2.fillRect(this.x, this.y, this.width, this.height);
        //anthillSprite image, coords, width/height
        ctx2.drawImage(anthillSprite, this.x, this.y, this.width, this.height);


    }

    //ant can enter anthill
    enter(){
        if(score >= 3){
        //Maybe have a message pop up?
        // ctx2.font = '42px Verdana';
        // ctx2.fillStyle = 'gold';
        // let homeMessage = 'Hurry home!';
        // ctx2.fillText(homeMessage, 300, 40);

           if(collision(antPC, anthill)){
            winGame();
        } 
        }
        
    }

}


 //function to enter anthill and win the game
    //must collect all food first
    //then have collision detection to allow win


//general function to handle anthill
function handleAnthill(){
    anthill.place();
    anthill.enter();

}

//creates new anthill
const anthill = new Anthill;

//Winner screen!
function winGame(){
    let win = document.getElementById('winner');
    let wrapper = document.querySelector('.wrapper');
    //switches to Winner screen screen
    wrapper.style.display = 'none';
    win.style.display = 'block';

    //clicking this button kinda crashes the game...
    // let goBackButton4 = document.getElementById('goBack4');
    // goBackButton4.addEventListener('click', function(){
    //     start.style.display = 'block';
    //     issues.style.display = 'none';
    //     //not best method for going back. Fix if there's time.
    //     location.reload();
    // })
}

