console.log("loading js file")
//decare variables
// //for now...
// localStorage.clear()
const addItems = document.querySelector(".addItems");
const itemsList = document.querySelector(".groceries");
const items = JSON.parse(localStorage.getItem('items')) || [];


//list items
getList = (groceries = [], myList) => {
    myList.innerHTML = groceries.map((food, i) => {
        return `<li id="item-${i}">
     <p for="item-${i}">${food.name}</p>
     <p>$${food.price}</p>
     <button type="submit" class="delete" id="delete-${i}" onClick=deleteItem(this)><strong>Delete</strong></button>
     </li>
     `
    }).join('')
}
//delete item
deleteItem = (e) => {
    // console.log(e)
    let string = e.id.split("delete-");
    let findString = string.join('')
    let convertString = parseInt(findString)
    for (let i = 0; i < items.length; i++) {
        if (convertString == i) {
            let message = `Deleting! Item: <b>${items[i].name}</b>  Price: <b>$${items[i].price}</b>`;
            GetNote.showMessageSuccess(message)
            console.log("deleting: ", items[i])
            items.splice(i, 1);
            // localStorage.removeItem(i)
            delete localStorage[i]
            localStorage.setItem('items', JSON.stringify(items));
            getList(items, itemsList);

        }
    }
}
const deleteItemId = document.querySelectorAll(".delete")
for (let i = 0; i < deleteItemId.length; i++) {
    //console.log(deleteItemId)
    deleteItemId[i].addEventListener("submit", deleteItem)
}
//add items
addItem = (e) => {
    e.preventDefault()
    const gName = (document.querySelector('[name=item')).value
    const gPrice = (document.querySelector('[name=price]')).value

    const item = {
        // id: items.length,
        name: gName,
        price: gPrice
    }
    if (gName == "" || gPrice == "") {
        let message = "Please fill out all inputs."
        GetNote.showMessageError(message)
        return false;
    }
    if (isNaN(gPrice)) {
        let message = "Price must be a number."
        GetNote.showMessageError(message)
        return false;
    } else {
        items.push(item);
        getList(items, itemsList);
        localStorage.setItem('items', JSON.stringify(items));
        e.target.reset();
    }
}
addItems.addEventListener("submit", addItem)

