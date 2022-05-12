console.log('test')



const newImage = (url) => {
    let image = document.createElement('img') //creates the img
    image.src = url //gets the images url or relative path
    document.body.append(image) //adds image to the body
    return image
}

const move = (image) => {
    image.style.position = 'fixed' //fixes the position of image

    const moveToCoords = (left, bottom) => {
        //Moves image specified number of pixels from left of screen
        image.style.left = left + 'px' //takes the number and adds 'px
        //Moves image specified number of pixels from bottom of screen
        image.style.bottom = bottom + 'px'
    }

    //Defines "to" as a property of moveToCoords allowing it to be 
    //accessible outside of the move function
    return {
        to: moveToCoords
    }
}

let ant1 = newImage('imgs/game-imgs/ANTS/ant-walk-south.gif')
move(ant1, 400, 100)

let ant2 = newImage('imgs/game-imgs/ANTS/ant-walk-north.gif')
move(ant2, 100, 200)

let moveTest = move(ant1)
moveTest.to
moveTest.to(500, 100)