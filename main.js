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

// const numbers = [7, 33, 45, 78, 2, 15, 99];
// let addNumber = 85;

// findIndexIteration(numbers, addNumber);

// function findIndexIteration(numbers, addNumber) {
//     for(let i = 0; i < numbers.length; i++) {
//         if(numbers[i] > addNumber) {
//             alert("index of first number over your number is " + i);
//             return;
//         }
//     }
//     alert("not any value over your value");
// }

/*SORT ITERATION */

let array = ["Jamil", "Amrah", "Farrukh", "Hilal"];
sortIteration(array);

function sortIteration(array) {
    for(let i = 0; i < array.length-1; i++) {
        let firstDataOfArray = array[i];
        let arrayIndex = [];
        let firstTextIndex = findLetterIndex(firstDataOfArray);
        arrayIndex.push(firstTextIndex);

        for(let r = i+1; true; ) {
            let nextDataOfArray = array[r];
            let arrayIndex = [];
            let secondTextIndex = findLetterIndex(nextDataOfArray);
            arrayIndex.push(secondTextIndex);
            checkIndex(array, firstTextIndex, secondTextIndex)

            function checkIndex(array, firstTextIndex, secondTextIndex) {
                if(firstTextIndex.length <= secondTextIndex.length) {
                    for(let f = 0; f < firstTextIndex.length; f++) {
                        if(firstTextIndex[f] < secondTextIndex[f]) {
                            let temp = array[i];
                            array[i] = array[r];
                            array[r] = temp;
                            break
                        }
                    }
                }
                else {
                    for(let s = 0; s < secondTextIndex.length; s++) {
                        if(firstTextIndex[s] < secondTextIndex[s]) {
                            let temp = array[i];
                            array[i] = array[r];
                            array[r] = temp;
                            break;
                        }
                    }
                }
            }
            break;
        }
    }
    
    function findLetterIndex(firstDataOfArray) {
        let uppercaseLetters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
        let lowerLetters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
    
        let index = [];
    
        for(let j = 0; j < firstDataOfArray.length; j++) {
           let letter = firstDataOfArray[j];
           for(let k = 0; k < uppercaseLetters.length; k++) {
               if(letter == uppercaseLetters[k] || letter == lowerLetters[k]) {
                    index.push(k);
               }
           }
        }
        return index;
    }
}