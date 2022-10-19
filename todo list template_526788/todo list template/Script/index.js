document.querySelector("#form").addEventListener("submit",myFun);

var todoList = [];

function myFun(){
    event.preventDefault();

    var name = document.querySelector("#name").value;

    var quantity = document.querySelector("#qty").value;

    var priority = document.querySelector("#priority").value;


    var todoobj= {

        itemName : name,
        itemQty : quantity,
        itemPrior : priority
    };

    todoList.push(todoobj);

    localStorage.setItem("todoList",JSON.stringify(todoList));

    document.querySelector("#name").value=""
    document.querySelector("#qty").value=""
}