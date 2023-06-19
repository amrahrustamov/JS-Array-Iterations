/*FIND ITERATION */

// const numbersFind = [5, 3, 17, 19, 35];
// let addNumberFind = prompt("add number");
// let firstFind = findIteration();
// alert("First number over " + addNumberFind + " is " + firstFind);

// function findIteration(numbersFind, addNumberFind) {
//     for(let i = 0; i < numbersFind.lenght; i++) {
//         if(numbersFind[i] > addNumberFind) {
//             return numbersFind[i];
//         }
//     }
//     alert("array does not contain a number greater than the number entered");
// }

/*FILTER ITERATION */

// const numbersFilter = [5, 3, 17, 19, 35];
// let addNumberFilter = 8;
// let arrayFilter = [];
// arrayFilter = filterIteration(numbersFilter, addNumberFilter);

// function filterIteration(numbersFilter, addNumberFilter) {
//     for(let i = 0; i < numbersFilter.length; i++) {
//         if(numbersFilter[i] > addNumberFilter) {
//             arrayFilter.push(numbersFilter[i]);
//         }
//     }
//     return arrayFilter;
// }

/*SOME ITERATION */

// const numbers = [33, 7, 55, 109, 6];
// let yourNumber = 2;
// let result = someIteration(numbers, yourNumber);
// alert('some over your number is ' + result);
// function someIteration(numbers, yourNumber) {
    // let numberIndex = numbers[i];
//     for(let i = 0; i < numbers.length; i++) {
//         if(numberIndex > yourNumber) {    
//             return true;
//         }
//     }
//     return false;
// }

/*EVERY ITERATION */

// const numbers = [33, 7, 55, 109, 6];
// let yourNumber = 200;
// let result = everyIteration(numbers, yourNumber);
// alert('all over your number is ' + result);
// function everyIteration(numbers, yourNumber) {
//     let count = 0;
//     for(let i = 0; i < numbers.length; i++) {
//         let numberIndex = numbers[i];
//         if(numberIndex > yourNumber) {    
//             count++;
//             if(count == numbers.length) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

/*FOREACH ITERATION */

// const numbers = [33, 45, 78, 2, 15];

// foreachIteration(numbers, text);
// function foreachIteration (numbers, text) {
//     for(let i = 0; i < numbers.length; i++) { 
//         let indexValue = numbers[i];
//         console.log(teindexValuext);
//     }   
// }

/*MAP ITERATION */

// const numbers = [33, 45, 78, 2, 15];
// let numbersNew = mapIteration(numbers);

// function mapIteration(numbers) {
//     let newArray = [];
//     for(let i = 0; i < numbers.length; i++) {
//         newArray.push(numbers[i]*2);
//     }
//     return newArray;
// }

/*FIND INDEX ITERATION */

const numbers = [7, 33, 45, 78, 2, 15, 99];
let addNumber = 85;

findIndexIteration(numbers, addNumber);

function findIndexIteration(numbers, addNumber) {
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] > addNumber) {
            alert("index of first number over your number is " + i);
            return;
        }
    }
    alert("not any value over your value");
}