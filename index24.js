// const input = [1, 2, 3, 3, 4, 5,2, 6,3,6,1];

// function removeDuplicate(arr) {
//     const result = [];  
//     let idx = 0;       
//     const tmp = {};    
    
//     for (let i = 0; i < arr.length; i++) {
//         if (!tmp[arr[i]]) {  
//             tmp[arr[i]] = 1; 
//             result[idx] = arr[i]; 
//             idx++;       
//         } 
//     }
//     return result; 
// }

// console.log(removeDuplicate(input));

// // Ascending Order==========================
// function sortAscending(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n-1; i++) {
//         for (let j = 0; j < n-1-i; j++) {
//             if (arr[j] > arr[j+1]) {
//                 // Swap elements
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// // Example usage:
// let arr = [64, 34, 25, 12, 22, 11, 90];
// console.log("Original array:", arr);
// console.log("Sorted array in ascending order:", sortAscending(arr));



// //Descending Order=================================

// function sortDescending(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n-1; i++) {
//         for (let j = 0; j < n-1-i; j++) {
//             if (arr[j] < arr[j+1]) {
//                 // Swap elements
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// // Example usage:
// let arr = [64, 34, 25, 12, 22, 11, 90];
// console.log("Original array:", arr);
// console.log("Sorted array in descending order:", sortDescending(arr));






// make first letter capital of all the words of sentence having 5 wordsd





// array sort krna h ascending or descending order m vo bhi 2 methods se 
// let array=[12,3,4,5,6,6,77];
// let m =0;

// let temp=[]
// for(let i=0; i<=array.length;i++){
//      if (m<array[i]){
//         m=array[i];
//         temp.push(m);

//      }

//    }
//         console.log(temp)



// 2  array sort krne k baad merge krne hai 

// array m se duplicate delete krne h // dono alag logic se bnaaoge

// array reverse krna hai 
let str = "knowledge is key to success";
let arr = str.split("");
// console.log(arr);

let temparr = [];
for (let i = arr.length - 1; i >= 0; i--) {
    temparr.push(arr[i]);
}

console.log(temparr.join(" ").split(" ").join());
// let temp2=temparr.join(" ").split(" ");
// // console.log(temp2);
// let temp3=[]
// for (let i = temp2.length - 1; i >= 0; i--) {
//     temp3.push(temp2[i]);
// }
// console.log(temp3.join(" "));

// let str = "knowledge is key to success";
// let arr = str.split("");
// console.log(arr);

// let temparr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     temparr.push(arr[i]);
// }

// console.log(temparr.join(""));



// knowledge is key to success
// isko convert krna hai 

// success to key is knowledge 
// egdelwonk si yek ot sseccus
// sseccus ot yek si egdelwonk