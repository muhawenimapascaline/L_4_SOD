const product = require("./product/product")
const{addNewProduct,display,}=product

// add new product

let newProduct={
    name:"oil",
    amount: 15,
    price: 1500

}
// let addNew={
//     name:"salt",
//     amount:15,
//     price:500
// }
addNewProduct(newProduct)
    // display all product
display()
//addnew product
// addNew()