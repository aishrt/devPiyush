// // --------------map---------



// let arr=[3,4,45,6,7,9]
// let arrresult=arr.map((number)=>{
//     return number*number;
// })
// console.log(arrresult)

// arr.map((number,index)=>{
//     console.log(number)
//     console.log(index);
// })

// // --------------filter method
// let evenarray=arr.filter((number)=>{
//     // return number%2==0
//     if (number%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// })

// console.log(evenarray)


// let arr2=[3,"this","test",34,55]
// let ans=arr2.filter((value)=>{
//     if(typeof(value)=="string"){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(ans)



// // ---------reduce------------------
// let arr3=[10,20,30,40]
// let arr3Ans= arr3.reduce((acc,curr)=>{
//     return acc+curr;
// },0);
// console.log(arr3Ans)


// arr3.forEach((value,index)=>{
//     console.log("number ",value," index ",index);
// });



// let obj={
//     name:"rohan",
//     age:26,
//     greet: function(){
//         console.log("hello");
//     }

// };
// for(let key in obj){
//     console.log(key," ",obj[key]);
// }


// let fullName="babbar";
// for (const val of fullName) {
//     console.log(val)
// }


// // ----------Array with function
// 8
// let arr4=[10,20,30,40,50]

// // function getSum(arr4){
// //     let len = arr4.length;
// //     let sum=0;  
// //     for (let index = 0; index < len; index++) {
// //         sum = sum +arr4[index];
        
// //     }
// //     return sum;
// // }

// function getSum(arr4){
//     let len = arr4.length;
//     let sum=0;  
//     arr4.forEach((value)=>{
//         sum=sum+value;
//     })
//     return sum;
// }

// console.log(getSum(arr4));


// let n=5;
// for(let i=0;i<n ;i=i+1)
// {
//     for(let j=0;j<i+1 ;j=j+1)
//     {
//         document.write("7 ");
//     }
//     document.write("<br>");
// }


// ----------Greater number in nested array-------------

// let arr = [1, 2, [3, 4, [5, 6], 1], 1];
// let result = [];

// function newArray(array) {
//   array.forEach(value => {
//     if (typeof value === 'number') {
//       result.push(value);
//     } else if (Array.isArray(value)) {
//         newArray(value);
//     }
//   });
// }

// newArray(arr);
// console.log(result);

// let maxNum =0;
// for(let i=0; i<=result.length;i++){
//      if (maxNum<result[i]){
//         maxNum=result[i];
//      }
//    }
//     console.log(maxNum)



// make first letter capital of all the words of sentence having 5 wordsd
// let sentence="this is sentence of having 5 words";
// // console.log();
// let newsentence=sentence.split(" ")


// let capt= newsentence.map(newsentence => newsentence.charAt(0).toUpperCase() + newsentence.slice(1)).join(' ');
// console.log(capt);

// // console.log(newsentence);
// console.log(sentence.replace(/\b\w/g, x => x.toUpperCase()))

// // const newarray = [];
// // for (let i = 0; i < newsentence.length; i++) {
    // //   let capitalizeArray = newsentence[i].toUpperCase();
    // //   newarray.push(capitalizeArray); 
    // //   };
    // // console.log(newarray);
    
    
    
    // // let temp=sentence[i].toUpperCase();
    // // console.log(temp);
    
    // // }
