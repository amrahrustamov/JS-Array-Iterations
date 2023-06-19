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

const numbers = [33, 7, 55, 109, 6];
let yourNumber = 2;
let result = someIteration(numbers, yourNumber);
alert('some over your number is ' + result);
function someIteration(numbers, yourNumber) {
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] > yourNumber) {    /* numbers[i] dont choose index value*/
            return true;
        }
    }
    return false;
}