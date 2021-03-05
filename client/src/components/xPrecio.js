


products.sort((a, b) =>{
    if (a.price < b.apellido){
        return -1
    }
    if(a.price > b.apellido){
        return 1
    }
    return 0
})