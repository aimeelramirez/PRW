console.log("loading js file")
//decare variables
//for now...
localStorage.clear()
const addItems = document.querySelector(".addItems");
const itemsList = document.querySelector(".groceries");
const items = JSON.parse(localStorage.getItem('items')) || [];

//list items
getList = (groceries = [], myList) => {
    myList.innerHTML = groceries.map((food, i) => {
        return `<li id="item-${i}">
     <label for="item-${i}">${food.gName}</label>
     <label>${food.gPrice}</label>
     <button type="submit" class="delete" id="delete-${i}" onClick=deleteItem(this)>Delete</button>
     </li>
     `
    }).join('')
}
//delete item
deleteItem = (e) => {
    console.log("clicker")
    let getTarget = e;
    console.log(getTarget)
}
const deleteItemId = document.querySelectorAll(".delete")
for (let i = 0; i < deleteItemId.length; i++) {
    console.log(deleteItemId)
    deleteItemId[i].addEventListener("submit", deleteItem)
}
//add items
addItem = (e) => {
    e.preventDefault()
    const gName = (document.querySelector('[name=item')).value
    const gPrice = (document.querySelector('[name=price]')).value
    const item = {
        gName,
        gPrice
    }
    if (gName == "" || gPrice == "") {
        let message = "Please fill out all inputs."
        GetNote.showMessage(message)
        return false;
    }
    if (isNaN(gPrice)) {
        let message = "Price must be a number."
        GetNote.showMessage(message)
        return false;
    } else {
        items.push(item);
        getList(items, itemsList);
        localStorage.setItem('items', JSON.stringify(items));
        e.target.reset();
    }
}
addItems.addEventListener("submit", addItem)

