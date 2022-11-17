function addItem(localStorageName,newItem) {
localStorage.setItem(localStorageName,newItem)
}

function getItem(newItem) {
    return localStorage.getItem(newItem)
}

function removeItem(item) {
    localStorage.removeItem(item)
}

export {addItem,getItem,removeItem}
