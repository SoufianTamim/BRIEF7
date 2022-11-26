


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
  document.getElementById("name").value = "";
  document.getElementById("brand").value = "";
  document.getElementById("price").value = "";
  document.getElementById("date").value = "";
  document.getElementById("type").value = "" ;
  document.querySelector('form').discount[0].checked = false ;
  document.querySelector('form').discount[1].checked = false;
  arr.push(false)
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


}
// ====================================== save modifications button hide  =============================//

document.getElementById('btn').style.display = "none";

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
  
  document.getElementById('md').style.display='none';
}

// =============================== upload data in table to inputs  =====================//

function Upload(ele) {
  i = Number(ele.id);
  document.getElementById('btn').title = i
  document.getElementById("name").value = names[i];
  document.getElementById("brand").value = brands[i];
  document.getElementById("price").value = prices[i];
  document.getElementById("date").value = dates[i] ;
  document.getElementById("type").value = types[i];
  document.querySelector('form').discount.value = discounts[i];
  document.getElementById('btn').style.display = "block";
  document.getElementById('btne').style.display = "none";

}
// ========================== save modifications from inputs to data table   =======================//

function saveMo(elem) {
  i = Number(elem.title);
  console.log(i);
  names[i] = document.getElementById("name").value; 
  brands[i] = document.getElementById("brand").value
  prices[i] = document.getElementById("price").value ;
  dates[i] = document.getElementById("date").value ;
  types[i] = document.getElementById("type").value ;
  discounts[i] = document.querySelector('form').discount.value;
  document.getElementById('btne').style.display = "block";
  document.getElementById('btn').style.display = "none";


  xd()
  emptyF()
}

// ===================== modal ===========================//
// var modal = document.getElementById("md");
    
//     window.onclick = function (event) {
//       if (event.target == modal) {
//         modal.style.display = "none";
//       }
//     };







// ============================ create variables =================================================== //
const form = document.getElementById("form");
const namee = document.getElementById("name");
const brand = document.getElementById("brand");
const price = document.getElementById("price");
const type = document.getElementById("type");
const date = document.getElementById("date");
const discount = document.getElementsByName('discount');

document.getElementById("btne").style.display = "none";



let myRegex = /^[a-zA-Z-\s]+$/;
let priceRe = / /g;


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
}

brand.onblur = () => {
  const brandValue = brand.value;
    if (brandValue === "") {
      setError(brand, "last name is required , cannot be empty ");
      arr.push(false);
    } else if (brandValue.length > 30) {
      setError(
        brand,
        "last name is too long, it should be less than 30 characters "
      );
      arr.push(false);
      // } else if (myRegex.test(brandValue) === false) {
      //   setError(brand, "last  name cannot contain numbers");
      //   arr.push(false)
    } else {
      setSuccess(brand);
    }
}
price.onblur = () => {
  const priceValue = price.value;
  if (priceValue === "") {
    setError(price, "phone number is required , cannot be empty ");
    arr.push(false);
  } else if (priceValue.length > 14) {
    setError(price, "phone number is too long");
    arr.push(false);
    // } else if (phoneRe.test(priceValue) === false) {
    //   setError(price, "phone number is invalid");
    //   arr.push(false)
  } else {
    setSuccess(price);
  }
}

date.onblur = () => {
  const dateValue = date.value;
    if (dateValue === "") {
      setError(date, "email is required , cannot be empty ");
      arr.push(false);
    } else if (dateValue.length > 50) {
      setError(date, "email is too long");
      arr.push(false);
    } else {
      setSuccess(date);
    }
  
};


// ================================== onclick function =============================================== //

const validateInputs = () => {
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
    setError(brand, "last name is required , cannot be empty ");
    arr.push(false);
  } else if (brandValue.length > 30) {
    setError(
      brand,
      "last name is too long, it should be less than 30 characters "
    );
    arr.push(false);
    // } else if (myRegex.test(brandValue) === false) {
    //   setError(brand, "last  name cannot contain numbers");
    //   arr.push(false)
  } else {
    setSuccess(brand);
  }
  //======================= phone Validation =============================//

  if (priceValue === "") {
    setError(price, "phone number is required , cannot be empty ");
    arr.push(false);
  } else if (priceValue.length > 14) {
    setError(price, "phone number is too long");
    arr.push(false);
    // } else if (phoneRe.test(priceValue) === false) {
    //   setError(price, "phone number is invalid");
    //   arr.push(false)
  } else {
    setSuccess(price);
  }
  //======================= email Validation =============================//
  if (typeValue === "") {
    setError(type, "email is required , cannot be empty ");
    arr.push(false);
  } else if (typeValue.length > 50) {
    setError(type, "email is too long");
    arr.push(false);
  } else {
    setSuccess(type);
  }
  //======================= email Validation =============================//
  if (dateValue === "") {
    setError(date, "email is required , cannot be empty ");
    arr.push(false);
  } else if (dateValue.length > 50) {
    setError(date, "email is too long");
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
    document.querySelector(".error_discount").innerHTML = "";
  }
  if (arr.length != 0) {
    document.getElementById("submit").style.display = "block";
  } else {
    document.getElementById("submit").style.display = "none";
    document.getElementById("btne").style.display = "block";
  }
  arr.push(false)
};

