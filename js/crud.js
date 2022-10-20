const products = [
    { // 0
        id: 1,
        name: "Apple",
        rate: 100,
        type: 'KG',
        rating: 4.5,
    },
    { // 1
        id: 2,
        name: "Xyz",
        rate: 50,
        type: 'L',
        rating: 2.5,
    }
]

function getProduct() {
    return products;
}
console.log(getProduct());

function addProduct(add) {
    return products.push(add);

}
console.log(addProduct({id:3, name:"pineapple", rate:300, type:'Kg', rating:4}));


function updateProduct(id, update_product) {
    objIndex = products.findIndex((obj => obj.id === id));
    products[objIndex].name = update_product.name;
    products[objIndex].rate = update_product.rate;
    products[objIndex].type = update_product.type;
    products[objIndex].rating = update_product.rating;
}
console.log(updateProduct(2, { name: "update", rate: 300, type:"gram", rating:5 }));


function deleteProduct(id) {
    objIndex = products.findIndex((obj => obj.id === id));
    delete products[objIndex];
}
console.log(deleteProduct(1));

function filterProduct(prating){
    filterP = products.filter((item => item.rating === prating));
    return filterP;
}
console.log(filterProduct(5));

// function deleteProduct(index) {
//     delete products[index];
// }
// console.log(deleteProduct(0));
// function updateProduct(update_product) {
//     objIndex = products.findIndex((obj => obj.id === 1));
//     products[objIndex].name = update_product;
// }
// console.log(updateProduct("laila"))

// function deleteProduct() {
//     return delete products[2];
//     // throw new Error('Not found with this Id')
// }
// console.log(deleteProduct());


