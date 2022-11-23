let namee = document.getElementById("name").value;
let brand = document.getElementById("brand").value;
let price = document.getElementById("price").value;
let date = document.getElementById("date").value;
let type = document.getElementById("type").value;
let discount = document.getElementsByName("discount").value;

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

  names[x] = namee;
  brands[x] = brand;
  prices[x] = price;
  dates[x] = date;
  types[x] = document.getElementById("type").value.insertCell;
  discounts[x] = discount;

  let cel1 = NewRow.insertCell(0);
  let cel2 = NewRow.insertCell(1);
  let cel3 = NewRow.insertCell(2);
  let cel4 = NewRow.insertCell(3);
  let cel5 = NewRow.insertCell(4);
  let cel6 = NewRow.insertCell(5);

  cel1.innerHTML = names[x];
  cel2.innerHTML = brands[x];
  cel3.innerHTML = prices[x];
  cel4.innerHTML = dates[x];
  cel5.innerHTML = types[x];
  cel6.innerHTML = discounts[x];

  n++;
  x++;
}
