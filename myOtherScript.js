// myOtherScript.js

// Define a function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// Call the function and log the result
console.log(isEven(10)); 

// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Filter even numbers from the array and log them
const evenNumbers = numbers.filter(num => isEven(num));
console.log(evenNumbers);

// Define a string variable
const message = "Hello, world!";

// Log the length of the string
console.log(message.length);

// Define a promise that resolves after a timeout
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved after timeout");
    }, 2000);
});

// Log the result of the promise
myPromise.then(result => console.log(result));
