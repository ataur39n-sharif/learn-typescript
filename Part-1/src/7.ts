/* 
Create a TypeScript program that declares an array of numbers. Use the spread  operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array. Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.
*/

let min: number = 0;
let max: number = 0;
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function format(...rest: number[]): void {
    min = Math.min(...rest);
    max = Math.max(...rest);
}

format(...numbers)
console.log({ min, max });
