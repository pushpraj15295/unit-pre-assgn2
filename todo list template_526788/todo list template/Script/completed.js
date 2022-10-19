

   var complite = JSON.parse(localStorage.getItem("compliteTodo"))

   complite.map(function(elm){

        var tr = document.createElement("tr");

        var th1 = document.createElement("th");
        th1.innerText = elm.itemName;
    
        var th2 = document.createElement("th");
        th2.innerText = elm.itemQty;
    
        var th3 = document.createElement("th");
        th3.innerText = elm.itemPrior;

        tr.append(th1,th2,th3);

        document.querySelector("#body").append(tr)
   })