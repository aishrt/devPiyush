// list- to show all todos
// add - to add a todo
// delete - to delete a todo
//quit - to exit the todo

let todo=[];
let req=prompt("Enter Your Req. ");
while(true){
    if(req=="quit") {console.log("Quiting App");
    break;
}
if(req=="list"){
    for (let i = 0; i < todo.length; i++) {
        console.log(i,todo[i]);
    }
}
else if(req=="add"){
    let task=prompt("Enter Task: ");
    todo.push(task);
    console.log("Task added");
}
else if(req=="delete"){
    let idx=prompt("Enter Task index ");
    todo.splice(idx,1);
    console.log("Task Deleted");
}
else{
    console.log("Wrong Request!");
}
req=prompt("Enter your Request");
}
