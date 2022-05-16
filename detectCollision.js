// console.log('collision!')
// console.log(character.x, character.y)


// //Need anthill coords, width, and height
// //Need ant player coords, widths, and heights
// //player ant heights and widths could change though??

// let anthillX = 500;
// let anthillHeight = 53;
// let anthillY = 350;
// let anthillWidth = 33;

// let antHeight = 21;
// let antWidth = 28;


// const enterAnthill = () => {
//     if(character.x + antHeight >= anthillX + anthillHeight){
//         console.log('colliding')
//     }

// }

// enterAnthill()

// collision detection between two rectangles
//function must return true or false
function collision(first, second){
    //exclamation mark operator returns the opposite
    //if any statement is true, then function will just
    //return true. So collision function needs to return
    //one of these are false
    //video 57:00
    return !(first.x > second.x + second.width ||
        first.x + first.width < second.x ||
        first.y > second.y + second.height ||
        first.y + first.height < second.y);
}