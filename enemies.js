// Format taken from Franks Laboratory
//https://www.youtube.com/watch?v=GXvNEwu9cgM&t=10s
class Enemy {
    constructor(x, y, width, height, speed, type){
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
    draw(){
        ctx1.fillStyle = 'pink';
        ctx1.fillRect(this.x, this.y, this.width, this.height);
    }
    update(){
        //makes enemies move
        this.x += this.speed * gameSpeed;
        //once object goes off the screen, it'll come back
        //on the other side
        if(this.speed > 0){
            //extra this.width adds more time before enemy
            //appears again
            if(this.x > canvas.width + this.width){
                this.x = 0 - this.width;
            }
        } else {
            if(this.x < 0 - this.width){
                this.x = canvas.width + this.width
            }
        }
    }
}

function initEnemies(){
    for(let i = 0; i < 2; i++){
        let x = i * 350;
        enemiesArray.push(new Enemy(x, canvas.height - grid * 5 - 5, grid - 40, grid - 40, 2, 'spider'));
    }
}
initEnemies();

//cycles through enemy array
function handleEnemies(){
    for(let i = 0; i < enemiesArray.length; i++){
        enemiesArray[i].update();
        enemiesArray[i].draw();
    }
}