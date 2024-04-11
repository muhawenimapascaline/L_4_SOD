const{product} = require("../database/database")

//create new product
const addNewProduct=(newProduct)=>{
    newProduct.id=(product.length)+1
   newProduct.totalPrice =(newProduct.amount*newProduct.price)

    console.log("-----newproduct added");
    product.push(newProduct);
    console.log("------add new product---");
    // if(!){
    //     console.log("no price defined")
    // }else{
    //   console.log(price)
    // }
    // let newPrice = 500
    // let newAmount = 15
}

// display all product

const display=()=>{
    console.log("----display all product------");
    console.log(product);
}

module.exports={
    addNewProduct,
    display
}