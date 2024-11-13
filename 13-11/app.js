// Array Methods

// Spread Operator in arrays-----------------------------------------------------------------
// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersCombined = [...numbersOne, ...numbersTwo];    //returns a new array with comnined

// Array join()...returns an array as a string.method does not change the original array.Any separator can be specified. The default is comma (,)
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join(" and ");

//.. Search Methods
//.. Sort Methods
//.. Iteration Methods

// Search Methods:--------------------------------------

// Array indexOf()
// Array lastIndexOf()
// Array includes()
// Array findIndex()
// Array findLast()
// Array findLastIndex()

// Sort Methods:----------------------------------------
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.sort();      //sorts an array alphabetically
fruits2.reverse();   //reverses the elements

//.. Iteration Methods:--------------------------------------------------------------
// Array forEach-----------method calls a function for each element in an array

let sum = 0;                                        
const numbers = [65, 44, 12, 4];                        
numbers.forEach(myFunction);                    
function myFunction(item) {                 
    sum += item;
} console.log(sum);

const array1 = ['a', 'b', 'c'];
array1.forEach((element) => console.log(element));

// >>>Syntax------ array.forEach(function(currentValue, index, arr), thisValue)
const number = [65, 44, 12, 4];
number.forEach(myFunction)
console.log(number);
function myFunction(item, index, arr) {
  arr[index] = item * 10;   
  
}

// Array map()-----------------------


// Array flatMap()
// Array filter()
// Array reduce()
