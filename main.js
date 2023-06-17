
const numbers = [5, 3, 17, 19, 35];
let addNumber = prompt("add number");
let first = findIteration();
alert("First number over " + addNumber + " is " + first);

function findIteration(numbers, addNumber) {
    for(let i = 0; i < numbers.lenght; i++) {
        if(numbers[i] > addNumber) {
            return numbers[i];
        }
    }
    alert("array does not contain a number greater than the number entered");
}

