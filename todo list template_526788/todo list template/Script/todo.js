var todoLists = JSON.parse(localStorage.getItem("todoList")) || []

var complite = JSON.parse(localStorage.getItem("compliteTodo")) || [];

todoLists.map(function (elm) {
  var tr = document.createElement("tr");

  var th1 = document.createElement("th");
  th1.innerText = elm.itemName;

  var th2 = document.createElement("th");
  th2.innerText = elm.itemQty;

  var th3 = document.createElement("th");
  th3.innerText = elm.itemPrior;

  var th4 = document.createElement("th");
  th4.innerText="complited"
  th4.style.color="red"
  th4.style.cursor="pointer"

  th4.addEventListener("click", function() {
       markcomplite(elm)
  })

  
  tr.append(th1, th2, th3, th4);

  document.querySelector("#body").append(tr);
});

function markcomplite(elm) {

    complite.push(elm)

    localStorage.setItem("compliteTodo",JSON.stringify(complite));
}