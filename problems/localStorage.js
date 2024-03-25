// get item 
const getItem=()=>{
    let item=[];
    const items= localStorage.getItem("items")
    if (items) {
        item=JSON.parse(items);
    }
    return item;
}

// save item 
const saveItem=(item)=>{
    const storedItems=getItem();
    const isExist =storedItems.find(id=>item==id);
    if (!isExist) {
    storedItems.push(item) ;
    localStorage.setItem('items',JSON.stringify(storedItems))      
    }


}  


// delete item 
const deleteItem=(id)=>{
    const storedItems=getItem();
    const remaining=storedItems.filter((i)=> id !== i);
    localStorage.setItem('items',JSON.stringify(remaining))  

}