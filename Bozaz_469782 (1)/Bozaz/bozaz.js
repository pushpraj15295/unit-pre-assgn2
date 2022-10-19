document.querySelector("form").addEventListener("submit", functionbozaz);

function functionbozaz() {
  event.preventDefault();

  var PC = document.querySelector("#category").value;

  var PT = document.querySelector("#name").value;

  var PP = document.querySelector("#price").value;

  var tr = document.createElement("tr");

  var td1 = document.createElement("td");
  td1.innerText = PC;

  var td2 = document.createElement("td");
  td2.innerText = PT;

  var td3 = document.createElement("td");
  td3.innerText = PP;

  tr.append(td1, td2, td3);

  document.querySelector("tbody").append(tr);
}
