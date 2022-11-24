let namee = document.getElementById("name").value;
let brand = document.getElementById("brand").value;
let price = document.getElementById("price").value;
let date = document.getElementById("date").value;
let type = document.getElementById("type").value;
let discount = document.getElementsByName('discount');


function deleteData(array, i) {
  array.splice(i, 1);

}



let names = [];
let brands = [];
let prices = [];
let dates = [];
let types = [];
let discounts = [];

let n = 1;
let x = 0;



function xd() {


  document.querySelector("thead").innerHTML = "";

  for (i = 0; i < names.length; i++) {

    document.querySelector("thead").innerHTML += `


<tr>
  <td>${names[i]}</td>
  <td>${brands[i]}</td>
  <td>${prices[i]}</td>
  <td>${dates[i]}</td>
  <td>${types[i]}</td>
  <td>${discounts[i]}</td>
  <td>  <i id='${i}' class="fas fa-edit" onClick="onEdit(this)" ></i><i onclick="mydelete(this)" id='${i}' class="fa-solid fa-trash" name="hh" ></i>  </td>
</tr>



`

  }


}






function AddRow() {
  let AddRown = document.getElementById("table");
  let NewRow = AddRown.insertRow(n);
  NewRow.className = x;
  names[x] = document.getElementById("name").value;
  brands[x] = document.getElementById("brand").value;
  prices[x] = document.getElementById("price").value;
  dates[x] = document.getElementById("date").value;
  types[x] = document.getElementById("type").value;
  for (i = 0; i < discount.length; i++) {
    if (discount[i].checked) {
      discounts[x] = document.getElementsByName('discount')[i].value;
    }
  }


  xd();
  // let cel1 = NewRow.insertCell(0);
  // let cel2 = NewRow.insertCell(1);
  // let cel3 = NewRow.insertCell(2);
  // let cel4 = NewRow.insertCell(3);
  // let cel5 = NewRow.insertCell(4);
  // let cel6 = NewRow.insertCell(5);
  // let cel7 = NewRow.insertCell(6);

  // cel1.innerHTML = names[x];
  // cel2.innerHTML = brands[x];
  // cel3.innerHTML = prices[x];
  // cel4.innerHTML = dates[x];
  // cel5.innerHTML = types[x];
  // cel6.innerHTML = discounts[x];
  // cel7.innerHTML = `<i id='${x}' class="fas fa-edit" onClick="onEdit(this)" ></i><i onclick="mydelete(this)" id='${x}' class="fa-solid fa-trash" name="hh" ></i>`;





  n++;
  x++;
}
function mydelete(element) {

  i = Number(element.id);

  deleteData(names, i);
  deleteData(brands, i);
  deleteData(prices, i);
  deleteData(dates, i);
  deleteData(types, i);
  deleteData(discounts, i);

  xd();




}

