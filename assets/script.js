


//Creates a new image based on URL. This will be used to
//create the player ant, enemies, and objects. 
//Code used from JS-Webgame Activity
const newImage = (url) => {
    let image = document.createElement('img') //creates the img
    image.src = url //gets the images url or relative path
    document.body.append(image) //adds image to the body
    return image
}




//Moves image to left and bottom coordinates
// move(newImage('imgs/game-imgs/ANTS/ant-walk-south.gif')).to(400, 250)

// move(newImage('imgs/game-imgs/ANTS/ant-walk-north.gif')).to(100, 200)

