const clear = document.querySelector(".clear");
const dateElement = document.getElementById("#date");
const list = document.querySelector("#list");
const input = document.querySelector("#input");

const linethru = "linethrough";

let toDoList, id;

let data = localStorage.getItem("todo");

if(data){
    toDoList = JSON.parse(data);
    id = toDoList.length;
    toDoList.id = toDoList.length - 1;
    loadList(toDoList);

} else{
    toDoList = [];
    id = 0;
}

function loadList(array) {
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done, item.trash);
    });
}

clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
})

function addToDo(toDo, id, done, trash) {

    if(trash){return};
    // const DONE = done ? check : uncheck;
    const LINE = done ? linethru : "";

    const text = 
    `<li class="item">
        <input type="checkbox" class="form-check-inline checkbox" value="" job="complete" id="${id}">
        <img src="node_modules/bootstrap-icons/icons/trash.svg" alt="trash" class="icon" job="remove">
        <p class="text ${LINE}">${toDo}</p></input>    
    </li>`;

    const position = "beforeend";

    list.insertAdjacentHTML(position, text);
    countTasksLeft();
}

document.addEventListener("keyup", addToDoItem);
document.getElementById("add-btn").addEventListener("click", addToDoItem);
function addToDoItem(even){
    // keyCode 13 is Enter key
    if(event.keyCode == 13 ){
        const toDo = input.value;

        if(toDo){
            addToDo(toDo, id, false, false);
            toDoList.push({
                name: toDo,
                id: id,
                done: false,
                trash: false
            });
            localStorage.setItem("todo", JSON.stringify(toDoList)); 
            id++;
        }
        input.value = "";
    }
}

function completeToDo(element) {
    // element.classList.toggle(check);
    // element.classList.toggle(uncheck);
    element.parentNode.querySelector(".text").classList.toggle(linethru);
    toDoList[element.id].done = !toDoList[element.id].done;
    countTasksLeft();
}

function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    toDoList[element.id].trash = true;
    countTasksLeft();
}

list.addEventListener("click", function(event){
    const element = event.target;
    const elementJob = event.target.attributes.job.value;
    if(elementJob == "complete") {
        completeToDo(element);
    } else if(elementJob == "remove"){
        removeToDo(element);
    }
    localStorage.setItem("todo", JSON.stringify(toDoList));
});


// Filter Tasks
function countTasksLeft() {
    let tasksLeft = toDoList.filter(todo => todo.done == false);   
    document.getElementById("taskCounter").innerHTML = "Tasks: " + tasksLeft.length;
}
