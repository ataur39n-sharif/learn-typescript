/* 
    Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?
*/

let num: number[] = [1, 2, 3, 4, 5, 6]

const evenNumber = num.filter(n => n % 2 === 0)
console.log(evenNumber);

const total = evenNumber.reduce((sum, currentValue) => sum + currentValue, 0)
console.log(total);
