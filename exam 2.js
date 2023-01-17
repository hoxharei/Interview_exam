const num = [1, 2, 3, 4, 5] //example of numbers we put

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const sum = num.reduce(reducer);


console.log(sum)