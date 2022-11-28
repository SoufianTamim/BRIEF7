let names = [];
let brands = [];
let prices = [];
let dates = [];
let types = [];
let discounts = [];
// ====================================== create table  ===========================================//
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
  <td>${discounts[i]}</td>  <td> 
   <i id='${i}' class="fas fa-edit" onClick="Upload(this)" >
  </i><i  onclick="document.getElementById('md').style.display='block'"
  id='${i}' class="fa-solid fa-trash"  ></i>  </td>
</tr>
`;
  }
}
// ====================================== empty inputs  ===========================================//
function emptyF() {
  document.getElementById("form").reset();
}
// ====================================== delete array content ===========================================//
function deleteData(array, i) {
  array.splice(i, 1);
}
// ====================================== create rows  ===========================================//
function AddRow() {
  names.push(document.getElementById("name").value);
  brands.push(document.getElementById("brand").value);
  dates.push(document.getElementById("date").value);
  prices.push(document.getElementById("price").value);
  types.push(document.getElementById("type").value);
  discounts.push(document.querySelector('form').discount.value);
  xd();
  emptyF()
  add.style.display = "none";
  submit.style.display = "block";
  arr.length = 0
}
// ====================================== delete data frm array ===========================================//
function myDelete(element) {
  i = Number(element.id);
  deleteData(names, i);
  deleteData(brands, i);
  deleteData(prices, i);
  deleteData(dates, i);
  deleteData(types, i);
  deleteData(discounts, i);
  xd()
  emptyF()
  document.getElementById('md').style.display = 'none';
}
// =============================== upload data in table to inputs  =====================//
function Upload(ele) {
  i = Number(ele.id);
  document.getElementById('save').title = i
  document.getElementById("name").value = names[i];
  document.getElementById("brand").value = brands[i];
  document.getElementById("price").value = prices[i];
  document.getElementById("date").value = dates[i];
  document.getElementById("type").value = types[i];
  document.querySelector('form').discount.value = discounts[i]
  submit.setAttribute('onclick', "validateInputs('save')")
}
// ========================== save modifications from inputs to data table   =======================//
function saveMo(elem) {
  i = Number(elem.title);
  console.log(i);
  names[i] = document.getElementById("name").value;
  brands[i] = document.getElementById("brand").value
  prices[i] = document.getElementById("price").value;
  dates[i] = document.getElementById("date").value;
  types[i] = document.getElementById("type").value;
  discounts[i] = document.querySelector('form').discount.value;
  document.getElementById('submit').style.display = "block";
  document.getElementById('save').style.display = "none";
  submit.setAttribute('onclick', "validateInputs('add')")
  xd()
  emptyF()
}
// ============================ create variables =================================================== //
const form = document.getElementById("form");
const namee = document.getElementById("name");
const brand = document.getElementById("brand");
const price = document.getElementById("price");
const type = document.getElementById("type");
const date = document.getElementById("date");
const discount = document.getElementsByName('discount');
let myRegex = /^[a-zA-Z-\s]+$/;
const arr = []
// ============================ event listner adding ====================================== //
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});
// ============================ set Errors function=================================================== //
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};
// ============================ set Success function ================================================== //
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};
//=======================  onblur functions =============================//
namee.onblur = () => {
  const nameValue = namee.value;
  if (nameValue === "") {
    setError(namee, "name is required");

  } else if (nameValue.length > 30) {
    setError(
      namee,
      "name is too long, it should be less than 30 characters "
    );

  } else if (myRegex.test(nameValue) === false) {
    setError(namee, "name cannot contain numbers");

  } else {
    setSuccess(namee);
  }
}
brand.onblur = () => {
  const brandValue = brand.value;
  if (brandValue === "") {
    setError(brand, "brand is required ");

  } else if (brandValue.length > 30) {
    setError(brand, "brand is too long, it should be less than 30 characters ");

  } else if (myRegex.test(brandValue) === false) {
    setError(brand, "brand cannot contain numbers");

  } else {
    setSuccess(brand);
  }
}
price.onblur = () => {
  const priceValue = price.value;
  if (priceValue === "") {
    setError(price, "price required");

  } else if (priceValue.length > 30) {
    setError(price, "price is too long");

  } else {
    setSuccess(price);
  }
}
date.onblur = () => {
  const dateValue = date.value;
  if (dateValue === "") {
    setError(date, "date is required");

  } else {
    setSuccess(date);
  }
};
// ================================== onclick function =============================================== //
const validateInputs = (x) => {
  // ======================= variables Values  ======================//
  const nameValue = namee.value;
  const brandValue = brand.value;
  const priceValue = price.value;
  const typeValue = type.value;
  const dateValue = date.value;
  //======================= name validaton ====================//
  if (nameValue === "") {
    setError(namee, "name is required");
    arr.push(false);
  } else if (nameValue.length > 30) {
    setError(
      namee,
      "first name is too long, it should be less than 30 characters "
    );
    arr.push(false);
  } else if (myRegex.test(nameValue) === false) {
    setError(namee, "first  name cannot contain numbers");
    arr.push(false);
  } else {
    setSuccess(namee);
  }
  //======================= first name validaton =========================//
  if (brandValue === "") {
    setError(brand, "brand is required ");
    arr.push(false);
  } else if (brandValue.length > 30) {
    setError(brand, "brand is too long, it should be less than 30 characters ");
    arr.push(false);
  } else if (myRegex.test(brandValue) === false) {
    setError(brand, "brand cannot contain numbers");
    arr.push(false)
  } else {
    setSuccess(brand);
  }
  //======================= phone Validation =============================//

  if (priceValue === "") {
    setError(price, "price is required , can't be empty ");
    arr.push(false);
  } else if (priceValue.length > 30) {
    setError(price, "price is too long");
    arr.push(false);
  } else {
    setSuccess(price);
  }
  //======================= email Validation =============================//
  if (typeValue === "") {
    setError(type, "type is required");
    arr.push(false);
  } else {
    setSuccess(type);
  }
  //======================= email Validation =============================//
  if (dateValue === "") {
    setError(date, "email is required , cannot be empty ");
    arr.push(false);
  } else {
    setSuccess(date);
  }
  //======================= group Validation =============================//
  if (discount[0].checked == false && discount[1].checked == false) {
    document.querySelector(".error_discount").innerHTML =
      "Please choose if product on discount or no ";
    arr.push(false);
  } else {
    document.querySelector(".error_discount").innerHTML = '';
  }
  if (arr.length != 0) {
    submit.style.display = "block";
  } else if ((arr.length == 0)) {
    if (x === 'add') {
      submit.style.display = "none";
      add.style.display = "block";
    } else {
      submit.style.display = "none";
      save.style.display = "block";
    }
  }
  arr.length = 0
};