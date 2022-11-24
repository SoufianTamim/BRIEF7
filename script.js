let namee = document.getElementById("name").value;
let brand = document.getElementById("brand").value;
let price = document.getElementById("price").value;
let date = document.getElementById("date").value;
let type = document.getElementById("type").value;
let discount = document.getElementsByName('discount');

let names = [];
let brands = [];
let prices = [];
let dates = [];
let types = [];
let discounts = [];

let n = 1;
let x = 0;

function AddRow() {

  let AddRown = document.getElementById("table");
  let NewRow = AddRown.insertRow(n);

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

  let cel1 = NewRow.insertCell(0);
  let cel2 = NewRow.insertCell(1);
  let cel3 = NewRow.insertCell(2);
  let cel4 = NewRow.insertCell(3);
  let cel5 = NewRow.insertCell(4);
  let cel6 = NewRow.insertCell(5);
  let cel7 = NewRow.insertCell(6);

  cel1.innerHTML = names[x];
  cel2.innerHTML = brands[x];
  cel3.innerHTML = prices[x];
  cel4.innerHTML = dates[x];
  cel5.innerHTML = types[x];
  cel6.innerHTML = discounts[x];
  cel7.innerHTML = `<i id='${x}' class="fas fa-edit" onClick="onEdit(this)" ></i><i id='${x}' class="fa-solid fa-trash" ></i>`;

  n++;
  x++;
}
function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("brand").value = "";
  document.getElementById("price").value = "";
  document.getElementById("date").value = "";
  selectedRow = null;
}


function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("name").value = selectedRow.cell[0].innerHTML;
  document.getElementById("brand").value = selectedRow.cells[1].innerHTML;
  document.getElementById("price").value = selectedRow.cells[2].innerHTML;
  document.getElementById("date").value = selectedRow.cells[3].innerHTML;
}



