function newItem(url){
    let item = newImage(url)
    item.addEventListener('click', () => {
        item.remove()
        let inventoryItem = document.createElement('img')

    })
    return item
}

