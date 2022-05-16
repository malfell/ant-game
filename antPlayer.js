// Ant goes on layer 2

class Ant {
    constructor(){
        this.antWidth = 21;
        this.antHeight = 28;
        //is lower needed?
        this.width = 21;
        this.height = 28;
        // Positions the ant??
        this.x = canvas.width/2 - this.width/2;
        this.y = canvas.height - this.height - 40;
        //stops sprite from moving right away
        this.moving = false 
    }
}

