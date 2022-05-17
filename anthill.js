//layer 2

//I don't know if there'll be a situation where I could need
//more than one anthill, but I figure it can't hurt to have
//the possibility open
class Anthill {
    constructor(x, y){
        //placement of anthill
        this.x = x;
        this.y = y;
        //width and height of anthill
        //consistent type for now
        this.width = 58;
        this.height = 33;
    }

    //places the anthill
    place(){
        //anthillSprite image, coords, width/height
        ctx2.drawImage(anthillSprite, 400, 300, this.width, this.height);
    }

    //function to enter anthill and win the game
    //must collect all food first
    //then have collision detection to allow win
    enterAnthill(){

    }
}

//general function to handle anthill
function handleAnthill(){
    anthill.place();

}

//creates new anthill
const anthill = new Anthill;