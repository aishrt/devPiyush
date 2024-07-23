// let string = "adsjfdsfsfjsdjfhacabcsbajda";
// let charCount = {};
// for (let char of string) {
//     charCount[char] = (charCount[char] || 0) + 1;
// }
// for (let char in charCount) {
//     if (charCount[char] > 1) {
//         console.log(`${char}: ${charCount[char]}`);
//     }
// }


// // function factorial(n){
// //     let fact=1;
// //     for (let i = 1; i <= n; i++) {
// //         fact=fact*i; 
// //     }
// //     return fact;
// // }
// // let n=5;
// // let ans=factorial(n);
// // console.log("fact of "+n+" is "+ ans);





// // function fibonacci(n) {
// //     let fibSeries = [];
// //     let a = 0, b = 1, temp;
// //     for (let i = 1; i <= n; i++) {
// //       fibSeries.push(a);
// //       temp = a + b;
// //       a = b;
// //       b = temp;
// //     }
// //     return fibSeries;
// //   }
  
// // console.log(fibonacci(8))



// // let num;
// // function isPrime(num) {
// //     if (num <= 1) {
// //       return false;
// //     }
    
// //     for (let i = 2; i < num; i++) {
// //       if (num % i === 0) {
// //         return false; 
// //       }
// //     }
// //     return true; 
// //   }
  
// //   for (let num = 1; num <= 100; num++) {
// //     if (isPrime(num)) { 
// //      console.log(num); 
// //     }
// //   }
  
// //   function factorial(n){
// //     let fact=1;
// //     for (let i = 1; i <= n; i++) {
// //         fact =fact*i;
// //     }
// //     return fact;
// // }
// // console.log(factorial(5));



// // let data = [34,3,1,25,54,12,89,5,76,789];


// //       for(i=0;i<data.length;i++){

// //         for(j=0;j<data.length;j++){
            
// //             if(data[j]>data[j+1]){
// //                 let temp=data[j];
// //                 data[j]=data[j+1];
// //                 data[j+1]=temp;
// //             }
// //         }
// //     }
// //     console.log(data)


// // -------------table----------------------

// // function table(number){
// //   for(let i=1;i<=10;i++){
// //     console.log(number*i)
// //   }
// // }
// // table(80)



// max time repeating ,max no. no. of repeation

let mArray = [1,2,3,4,4,2,4]
let count = 0
let mostRepeatedValue = 0
let map = Map

// for (i =0; i<mArray.length; i++){
//   let mValue = mArray[i]

//   if(map.)
// } 

let arr = [1, 2, 3, 4, 2, 4, 4];
let charArray = {};
let great = 0;
let num = 'a';


for (let val of arr) {
    if (charArray[val]) {
        charArray[val]++;
    } else {
        charArray[val] = 1;
    }
}

for (let val in charArray) {
    if(charArray[val] > great){
        great=charArray[val];
        num =val;
    }else{
        great=charArray[val];
        num =val;
    }
}
console.log({ num, great });
