"use strict";
//layer 2
var Food = /** @class */ (function () {
    function Food() {
        //place food in random positions that aren't too close to edge of canvas
        //food can spawn on anthill!! Probably need to fix that!
        this.x = Math.floor(Math.random() * (800 - 50));
        this.y = Math.floor(Math.random() * (600 - 50));
        //width and height of food
        //consistent type for now. Maybe there could be variety later.
        this.width = 10;
        this.height = 10;
    }
    ;
    Food.prototype.draw = function () {
        // ctx2.fillStyle = 'brown';
        // ctx2.fillRect(this.x, this.y, this.width, this.height);
        ctx2.drawImage(foodSprite, this.x, this.y, this.width, this.height);
    };
    return Food;
}());
//score updates on screen with each food collected
function updateScore() {
    ctx2.font = '24px Arial';
    ctx2.fillStyle = 'black';
    var string = 'Food Collected: ' + score + '/3';
    ctx2.fillText(string, 20, 30);
}
//collects food with collision detection
function collect() {
    if (collision(antPC, food)) {
        score += 1;
        ctx2.clearRect(0, 0, canvas.width, canvas.height);
        //but maybe a better way to have all the food show up at once?
        //I used the random position code from this link for the two below.
        //https://blog.thejaytray.com/canvas-basics-07-random-positions/
        food.x = Math.floor(Math.random() * (800 - 50));
        food.y = Math.floor(Math.random() * (600 - 50));
        updateScore();
    }
    else {
        ctx2.clearRect(0, 0, canvas.width, canvas.height);
        food.draw();
        updateScore();
    }
}
function handleFood() {
    //food will stop appearing once score reaches 3
    if (score < 3) {
        collect();
    }
    //once food collected reaches 3, the ant can go home
    if (score === 3) {
        ctx2.font = '24px Arial';
        ctx2.fillStyle = 'black';
        var string = 'All food gathered! Go home!';
        ctx2.fillText(string, 20, 30);
    }
}
//should be a way to get all the food into an array like the enemies array
//go back to this later
var food = new Food();
