//layer 2

class Food{
    constructor(x, y){
        //placement of food
        this.x = x;
        this.y = y;
        //width and height of food
        //consistent type for now. Maybe there could be variety later.
        this.width = 10;
        this.height = 10;
    };

    //places food
    //randomly across screen or in specific spots?
    //specific spots for now. Could be randomized later.
    place(){
        //foodSprite image, coords, width/height
        ctx2.drawImage(foodSprite, this.x, this.y, this.width, this.height);
        // ctx2.drawImage(foodSprite, 100, 250, this.width, this.height);
        // ctx2.drawImage(foodSprite, 300, 500, this.width, this.height);
        // ctx2.drawImage(foodSprite, 700, 200, this.width, this.height);

    };

    //lets ant collect food
    collect(){
        
        if(collision(antPC, food1)){
            console.log('yum')
            delete food1.x;
            delete food1.y;

        }
        if(collision(antPC, food2)){
            console.log('mmmmm')

        }
        if(collision(antPC, food3)){
            console.log('yummy')

        } 
    }
};

// function foodScore(){
//     score++;
// }

// function foodCount(){
//     ctx2.fillStyle = 'black';
//     ctx2.strokeStyle = 'black';
//     ctx2.font = '20px Courier';
//     ctx2.fillText('Food Collected' + score, 50, 50);
// }


// functions for placeFood and collectFood combined
//combine everything into an array though?
function handleFood(){
    food1.place();
    food2.place();
    food3.place();
    food1.collect();
    food2.collect();
    food3.collect();

}

function newItem(url){
    let item = newImage(url)
    item.addEventListener('click', () => {
        item.remove()
        let inventoryItem = document.createElement('img')

    })
    return item
}

const food1 = new Food(100, 250);
const food2 = new Food(300, 500);
const food3 = new Food(700, 200);


// let food1 = foodArray.push(new Food(100, 250));
// let food2 = foodArray.push(new Food(300, 500));
// let food3 = foodArray.push(new Food(700, 200))