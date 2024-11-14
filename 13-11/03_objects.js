//singalton
// Object.create

//object literals

const mySym=Symbol("key1")   //symbol declaration

const JsUser={
    name:"abc",
    age:18,
    location:"jaipur",
    isLoggedIn:false,
    lastLogin:["Mon","Sat"],
    "full name":"2nd way of access",
    [mySym]:"mykey1"   //Syntax to use Symbol in object
}
console.log(JsUser.location); //1st way to access obj

console.log(JsUser["location"]);  //2nd way
console.log(JsUser["full name"]);  
console.log(JsUser[mySym]);  

// change object value
JsUser.location="punjab"
// Object.freeze(JsUser);      //==>to freeze object
JsUser.location="delhi"    
console.log(JsUser["location"]);

JsUser.greeting=function(){
    console.log("hello js user");;
}
JsUser.greetingTwo=function(){
    console.log(`hello js user, ${this.name}`);  //refer name using this
}

console.log(JsUser.greeting());   //unfreeze obj to use method
console.log(JsUser.greetingTwo());   
