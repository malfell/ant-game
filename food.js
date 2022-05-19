//layer 2

class Food{
    constructor(){
        //place food in random positions that aren't too close to edge of canvas
        //food can spawn on anthill!! Probably need to fix that!
        this.x = Math.floor(Math.random() * (800 - 50));
        this.y = Math.floor(Math.random() * (600 - 50));
        //width and height of food
        //consistent type for now. Maybe there could be variety later.
        this.width = 10;
        this.height = 10;
    };

    draw(){
        // ctx2.fillStyle = 'brown';
        // ctx2.fillRect(this.x, this.y, this.width, this.height);
        ctx2.drawImage(foodSprite, this.x, this.y, this.width, this.height);
    }

}

function updateScore(){
    ctx2.font = '24px Arial';
    ctx2.fillStyle = 'black';
    let string = 'Food Collected: ' + score + '/3';
    ctx2.fillText(string, 20, 30);
}

function collect(){
    if(collision(antPC, f1)){
        score += 1;
        ctx2.clearRect(0, 0, canvas.width, canvas.height);
        //but maybe a better way to have all the food show up at once?
        f1.x = Math.floor(Math.random() * (800 - 50));
        f1.y = Math.floor(Math.random() * (600 - 50));
        updateScore();
    } else{
        ctx2.clearRect(0, 0, canvas.width, canvas.height);
        f1.draw();
        updateScore();
    }
}


function handleFood(){
    collect();
}

//should be a way to get all the food into an array like the enemies array
//go back to this later
let f1 = new Food();
// let f2 = new Food();
// let f3 = new Food();
