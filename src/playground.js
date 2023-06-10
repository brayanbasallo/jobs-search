export const eventOrOdd = (num) => {
    if (num % 2 === 0) {
        return 'even';
    }
    return 'odd';
}

export const multiply = (a, b) =>  a * b;


// ES6 map method on arrays
// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map((number) => number * number );
// console.log(squares);   
// const names = ['Andrew', 'Jen', 'Jess'];
// const lowercaseNames = names.map((name) => name.toLowerCase());
// console.log(lowercaseNames);