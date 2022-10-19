// write code here, dont change anytding in HTML and css files
// refer to id's mentioned in html files carefully
// Follow tde exact column order for tables,for eg: name should be filled under "name" column
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit", temfunction);

function temfunction() {
  event.preventDefault();

  var images = document.querySelector("#image").value;

  var names = document.querySelector("#name").value;

  var batches = document.querySelector("#batch").value;

  var dsa = document.querySelector("#dsa").value;

  var skill = document.querySelector("#cs").value;

  var code = document.querySelector("#coding").value;

  var tr = document.createElement("tr");

  // var td1= document.createElement("td")
  var img = document.createElement("img");
  img.src = images;

  var td2 = document.createElement("td");
  td2.innerText = names;

  var td3 = document.createElement("td");
  td3.innerText = batches;

  var td4 = document.createElement("td");
  td4.innerText = dsa;

  var td5 = document.createElement("td");
  td5.innerText = skill;
    
  var td6 = document.createElement("td");
  td6.innerText = code;

  var td7 = document.createElement("td");
  td7.innerText = Math.ceil(
    (Number(dsa)+Number(skill)+Number(code))/30*100);

  var td8 = document.createElement("td");
  // td8.innerText= (if(td7.innerText>50){td8.innerText="regular"}else{td8.innerText="async"})
  if (td7.innerText >= 50) {
    td8.innerText = "regular";
    td8.style.backgroundColor = "green";
  } else {
    td8.innerText = "async";

    td8.style.backgroundColor = "red";
  }

  tr.append(img, td2, td3, td4, td5, td6, td7, td8)

  document.querySelector("tbody").append(tr);
}
