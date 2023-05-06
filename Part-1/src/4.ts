/* 
Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.
*/


type ProductTuple = [string, number, number]

let product1: ProductTuple = ['product1', 10, 2];
let product2: ProductTuple = ['product2', 20, 3];
let product3: ProductTuple = ['product3', 30, 4];

let products: ProductTuple[] = [product1, product2, product3]

function calculateCost<T>(products: T[]): number {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        const pd = products[i];
        total += Array.isArray(pd) ? (pd[1] * pd[2]) : 0
    }
    return total
}

console.log(calculateCost<ProductTuple>(products));
