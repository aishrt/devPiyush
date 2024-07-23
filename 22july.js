// ---------------------make first letter capital of all the words of sentence having 5 wordsd
function titleCase(str) {
    var word = str.split(" "); var newArray = [];
    for (var i = 0; i < word.length; i++) {
        newArray.push(word[i].charAt(0).toUpperCase() + word[i].slice(1));
    }
    return newArray.join(" ");
}
console.log(titleCase("here are the five words"))


//--------------------- array sort krna h ascending or descending order m vo bhi 2 methods se 
let numbers = [5, 2, 8, 1, 4];

numbers.sort((a, b) => a - b);
console.log(numbers);
numbers.sort((a, b) => b - a);
console.log(numbers);



// 2nd method------------------------------------------------------------
let fruits = ["banana", "Orange", "apple", "Mango"];

fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits);
fruits.sort((a, b) => b.localeCompare(a));
console.log(fruits);



// --------------------- 2  array sort krne k baad merge krne hai 
let arr1 = [4, 2, 3, 1, 5], arr2 = [2, 8, 6, 6, 4];
console.log(arr1.sort());
console.log(arr2.sort());
console.log((arr1.concat(arr2)).sort());


// ---------------------array m se duplicate delete krne h 
let array = [1, 2, 3, 4, 2, 3, 1, 5];
let newArray = [...new Set(array)];
console.log(newArray);

//--------------------- array reverse krna hai 

let array2 = [1, 2, 3, 4, 5];
array2.reverse();
console.log(array2);

// ---------------------knowledge is key to success
//---------------------- isko convert krna hai 

let str = "knowledge is key to success";

// ---------------------egdelwonk si yek ot sseccus
let str2 = str.split("");
console.log(str.split(' ').map(word => word.split('').reverse().join('')).join(' '))

// ---------------------success to key is knowledge 
console.log(str.split(" ").reverse().join(" "))

// sseccus ot yek si egdelwonk
console.log(str.split("").reverse().join(""))