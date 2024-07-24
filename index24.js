const input = [1, 2, 3, 3, 4, 5,2, 6,3,6,1];

function removeDuplicate(arr) {
    const result = [];  
    let idx = 0;       
    const tmp = {};    
    
    for (let i = 0; i < arr.length; i++) {
        if (!tmp[arr[i]]) {  
            tmp[arr[i]] = 1; 
            result[idx] = arr[i]; 
            idx++;       
        } 
    }
    return result; 
}

console.log(removeDuplicate(input));

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
