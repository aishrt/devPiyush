// Traffic light System

// let light="red";

// if(light=="red"){
//     console.log("stop");
// }
// else if(light=="yellow"){
//     console.log("look");
// }
// else if(light=="green"){
//     console.log("go");
// }
// ------------------------------------------------------------------------------



// popcorn price based on size

// let size="s";

// if(size=="xl") console.log(250);
// else if(size=="l") console.log(200);
// else if(size=="m") console.log(100);
// else if(size=="s") console.log(50);

// --------------------------------------------------------------------


// days  of week using switch 

// let day=6;

// switch(day){
//     case 1: console.log("Monday");  break;
//     case 2: console.log("Tuesday");  break;
//     case 3: console.log("Wednesday");  break;
//     case 4: console.log("Thursday");  break;
//     case 5: console.log("Friday");  break;
//     case 6: console.log("Saturday");  break;
//     default :console.log("Sunday");
// }

// -----------------------------Common String Methods--------------------------------------------------

// let str="this is a testing string";

// console.log(str.indexOf("a")); //return 1st index of occurance of value
// console.log(str.charAt(8));  // return char at specific index
// console.log(str.slice(1,8));  //extract a part of string based in indices (start,end)
// console.log(str.substring(1,8)); // similar as slice but  no -ve indices allowed
// console.log(str.substring(1,8));  //(stat,length)
// console.log(str.replace("this","that")); //that is a testing string
// console.log(str.split());   //----splits a string into an array
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());  //remove whitespaces from both ends
// console.log(str.includes("the")); //if string contains substring
// console.log(str.repeat(3));



// --------------------------------Array Methods------------------------------------------------------

// Basic Array Methods
// const arr = ["Banana", "Orange", "Apple", "Mango"];
// const arr2=["item1" ,"item2"];

// console.log(arr.length);  //length (size) of an array
// console.log(arr.toString());  //converts an array to a string
// console.log(arr[2]);       //returns an indexed element from an array 
// console.log(arr.at(2));   //returns the same as []

// console.log(arr.join(" * "));   //joins all array elements into a string.It behaves just like toString(), but in addition you can specify the separator
// console.log(arr.pop());         // removes from end & returns it
// console.log(arr.push("Kiwi"));  console.log(arr);   //adds to end
// console.log(arr.shift());       //removes from start & return it
// console.log(arr.unshift("Lemon"));   console.log(arr);   //add to start
// console.log(arr.concat(arr2));      //Merging Two Arrays.Note-does not change the existing arrays.returns a new array.

// const myArr = [[1,2],[3,4],[5,6]];
// console.log(myArr.flat());          //creates a new array with sub-array elements concatenated to a specified depth

// console.log(arr.slice(1, 4));    //slices out a piece of an array into a new array       
// console.log(arr); 


// console.log(arr.splice(2, 0, "Lemon", "Kiwi"));     //method can be used to add new items to an array start from index2 ,delete 0 element and add rest of the parameters in index 2. NOTE-//returns an array with the deleted items
// console.log(arr); 

// const months = ["Jan", "Feb", "Mar", "Apr"];       //----------toSpliced() method as a safe way to splice an array without altering the original array.
// const spliced = months.toSpliced(0, 1);         //The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array
// console.log(spliced); 
// console.log(months);

// console.log(arr.copyWithin(2,0));        //copies array elements to another position in an array:

// -----------------------------------------------------Arrays O/P------------------------------------------------------------------------------------------------------------------
// 4
// Banana,Orange,Apple,Mango
// Apple
// Apple
// Banana * Orange * Apple * Mango
// Mango
// 4
// [ 'Banana', 'Orange', 'Apple', 'Kiwi' ]
// Banana
// 4
// [ 'Lemon', 'Orange', 'Apple', 'Kiwi' ]
// [ 'Lemon', 'Orange', 'Apple', 'Kiwi', 'item1', 'item2' ]
// [ 1, 2, 3, 4, 5, 6 ]
// [ 'Orange', 'Apple', 'Kiwi' ]
// [ 'Lemon', 'Orange', 'Apple', 'Kiwi' ]
// []          //If no elements were removed, it returns an empty array
// [ 'Lemon', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Kiwi' ]
// [ 'Feb', 'Mar', 'Apr' ]
// [ 'Jan', 'Feb', 'Mar', 'Apr' ]
// [ 'Lemon', 'Orange', 'Lemon', 'Orange', 'Lemon', 'Kiwi' ]



