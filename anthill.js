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
            console.log('home!');
            // alert('Win!')
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