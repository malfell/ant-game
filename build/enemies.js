"use strict";
// Format taken from Franks Laboratory
//https://www.youtube.com/watch?v=GXvNEwu9cgM&t=10s
var Enemy = /** @class */ (function () {
    function Enemy(x, y, width, height, speed, type) {
        //x position on canvas
        this.x = x;
        //y position on canvas
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        //spider, beetle, what else
        this.type = type;
    }
    //draws enemy bases
    Enemy.prototype.draw = function () {
        // ctx4.fillStyle = 'pink';
        // ctx4.fillRect(this.x, this.y, this.width, this.height);
        ctx4.drawImage(spiderSprite, this.x, this.y, this.width, this.height);
        //enemy sprite isn't working
        // if(this.type === 'spider'){
        //     ctx4.drawImage(spiderSprite, this.x, this.y, this.width, this.height);
        // }
    };
    Enemy.prototype.updateLeftRight = function () {
        //makes enemies move left and right
        this.x += this.speed * gameSpeed;
        //once object goes off the screen, it'll come back
        //on the other side
        if (this.speed > 0) {
            //extra this.width adds more time before enemy
            //appears again
            if (this.x > canvas.width + this.width) {
                this.x = 0 - this.width;
            }
        }
        else {
            if (this.x < 0 - this.width) {
                this.x = canvas.width + this.width;
            }
        }
    };
    Enemy.prototype.updateUpDown = function () {
        //makes enemies move up and down
        this.y += this.speed * gameSpeed;
        //once object goes off the screen, it'll come back
        //on the other side
        if (this.speed > 0) {
            //extra this.width adds more time before enemy
            //appears again
            if (this.y > canvas.height + this.height) {
                this.y = 0 - this.height;
            }
        }
        else {
            if (this.y < 0 - this.height) {
                this.y = canvas.height + this.height;
            }
        }
    };
    return Enemy;
}());
function initEnemies() {
    //2 spiders moving right above anthill
    for (var i = 0; i < 2; i++) {
        //space in between 2 spiders is 160
        var x = i * 160;
        enemiesArray.push(new Enemy(x, canvas.height - grid * 5 - 5, grid - 40, grid - 40, 2, 'spider'));
    }
    //1 spider moving left below anthill
    for (var i = 0; i < 1; i++) {
        //space in between 2 spiders is 160
        var x = i * 160;
        enemiesArray.push(new Enemy(x, canvas.height - grid * 3 - 5, grid - 40, grid - 40, -5, 'spider'));
    }
    //1 spider moving left below anthill
    for (var i = 0; i < 1; i++) {
        //space in between 2 spiders is 160
        var x = i * 300;
        enemiesArray.push(new Enemy(x, canvas.height - grid * 4 - 5, grid - 40, grid - 40, 1, 'spider'));
    }
    //1 spider moving left below anthill
    for (var i = 0; i < 1; i++) {
        //space in between 2 spiders is 160
        var x = i * 300;
        enemiesArray.push(new Enemy(x, canvas.height - grid, grid - 40, grid - 40, 4, 'spider'));
    }
}
initEnemies();
// Make enemies move up/down and right/left too?
//cycles through enemy array
function handleEnemies() {
    //makes enemies move diagonally
    for (var i = 0; i < enemiesArray.length; i++) {
        enemiesArray[i].updateLeftRight();
        enemiesArray[i].updateUpDown();
        enemiesArray[i].draw();
    }
    //Collision detection for enemies!
    //If ant is hit by enemy, the game ends.
    for (var i = 0; i < enemiesArray.length; i++) {
        if (collision(antPC, enemiesArray[i])) {
            gameOver();
        }
    }
}
