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
    }

    //places food
    //randomly across screen or in specific spots?
    place(){

    //foodSprite image, coords, width/height
    ctx2.drawImage(foodSprite, 100, 250, this.width, this.height);
    ctx2.drawImage(foodSprite, 300, 500, this.width, this.height);
    ctx2.drawImage(foodSprite, 700, 200, this.width, this.height);


    };

    //lets ant collect food
    // collect(){

    // }
};



// functions for placeFood and collectFood combined
function handleFood(){
    food.place();
}

function newItem(url){
    let item = newImage(url)
    item.addEventListener('click', () => {
        item.remove()
        let inventoryItem = document.createElement('img')

    })
    return item
}

const food = new Food();
