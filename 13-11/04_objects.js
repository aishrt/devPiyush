//singalton or declare using constructer

const tinderUser1=new Object()  //singalton object
const tinderUser={};            //Non Singalton object

tinderUser.id="123abc"
tinderUser.name="saho"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

// ----------------Nested Object-------------------------------------------------
const regularUser={
    email:"some@mail.com",
    fullname:{
            userfullname:{
                firstname:"atharv",
                lastname:"joshi"
            }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// --------------Combining Objects------------------------------------------------

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3= {obj1,obj2}  //Wrong way , object in object
// console.log(obj3);       //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3=Object.assign({},obj1,obj2)  //{} is an optional param assume it to target and other parm are source

const obj3={...obj1,...obj2}  //using spread operator , most of the time using this syntax
// console.log(obj3);


// -----------------Array of Objects , from database--------------------------------------------

const users=[
    {
        id:1,
        email:"email@email.com"
    },
    {
        id:1,
        email:"email@email.com"
    },
    {
        id:1,
        email:"email@email.com"
    },
]
users[1].email
console.log(tinderUser);

//interesting methods
console.log(Object.keys(tinderUser));     //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));   //[ '123abc', 'saho', false ]
console.log(Object.entries(tinderUser));  //[ [ 'id', '123abc' ], [ 'name', 'saho' ], [ 'isLoggedIn', false ] ] 

//check is the property exist
console.log(tinderUser.hasOwnProperty("isLoggedIn")); //true