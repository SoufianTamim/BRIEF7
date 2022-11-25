let namee = document.getElementById("name").value;
let brand = document.getElementById("brand").value;
let price = document.getElementById("price").value;
let date = document.getElementById("date").value;
let type = document.getElementById("type").value;
let discount = document.getElementsByName('discount');
let selectedRow = null;

function deleteData(array, i) {
  array.splice(i, 1);
}



let names = [];
let brands = [];
let prices = [];
let dates = [];
let types = [];
let discounts = [];


function xd() {


  document.querySelector("tbody").innerHTML = "";

  for (i = 0; i < names.length; i++) {

    document.querySelector("tbody").innerHTML += `
<tr>
  <td>${names[i]}</td>
  <td>${brands[i]}</td>
  <td>${dates[i]}</td>
  <td>${prices[i]}</td>
  <td>${types[i]}</td>
  <td>${discounts[i]}</td>  <td>  <i id='${i}' class="fas fa-edit" onClick="Upload(this)" ></i><i onclick="myDelete(this)" id='${i}' class="fa-solid fa-trash"  ></i>  </td>
</tr>
`
  }
}


function AddRow() {
  names.push(document.getElementById("name").value);
  brands.push(document.getElementById("brand").value);
  dates.push(document.getElementById("date").value);
  prices.push(document.getElementById("price").value);
  types.push(document.getElementById("type").value);
  discounts.push(document.querySelector('form').discount.value);
  xd();

}
document.getElementById('btn').style.display = "none";

function myDelete(element) {
  i = Number(element.id);
  deleteData(names, i);
  deleteData(brands, i);
  deleteData(prices, i);
  deleteData(dates, i);
  deleteData(types, i);
  deleteData(discounts, i);
  xd()
}
function Upload(ele) {
  i = Number(ele.id);
  document.getElementById('btn').title = i
  document.getElementById("name").value = names[i];
  document.getElementById("brand").value = brands[i];
  document.getElementById("price").value = prices[i];
  document.getElementById("type").value = types[i];
  document.querySelector('form').discount.value = discounts[i];
  document.getElementById('btn').style.display = "block";
  document.getElementById('btne').style.display = "none";
}
function saveMo(elem) {
  i = Number(elem.title);
  console.log(i);
  names[i] = document.getElementById("name").value; 
  brands[i] = document.getElementById("brand").value
  prices[i] = document.getElementById("price").value ;
  types[i] = document.getElementById("type").value ;
  discounts[i] = document.querySelector('form').discount.value;
  xd()
  document.getElementById('btne').style.display = "block";
  document.getElementById('btn').style.display = "none";


}