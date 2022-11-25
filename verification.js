// ============================ create variables =================================================== //
let form = document.getElementById("myform");
let namee = document.getElementById("name");
let brand = document.getElementById("brand");
let price = document.getElementById("price");
let date = document.getElementById("date");
let type = document.getElementById("type");
let discount = document.getElementsBynamee('discount');

let nameValue = document.getElementById("name").value;
let brandValue = document.getElementById("brand").value;
let priceValue = document.getElementById("price").value;
let dateValue = document.getElementById("date").value;
let typeValue = document.getElementById("type").value;
let discountValue= document.getElementsBynamee("discount");

let myRegex = /^[a-zA-Z-\s]+$/;
let priceRe = / /g;




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
// ============================ onblur Functions ================================================== //













namee.onblur = () => {
  if (nameValue === "") {
    setError(namee, "namee is required");
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
};
brand.onblur = () => {
  if (brand === "") {
    setError(brand, "brand is required , cannot be empty ");
  } else if (brand.length > 30) {
    setError(brand,"brand is too long, it should be less than 30 characters ");
  } else if (myRegex.test(brand) === false) {
    setError(brand, "last  name cannot contain numbers");
  } else {
    setSuccess(brand);
  }
};
price.onblur = () => {
  let priceRe = / /g;
  if (price === "") {
    setError(price, "price is required , cannot be empty ");
  } else if (price.length > 14) {
    setError(price, "price is too long");
  } else if (priceRe.test(price) === false) {
    setError(price, "price is invalid");
  } else {
    setSuccess(price);
  }
};

date.onblur = () => {
  if (dateValue === "") {
    setError(date, "date is required , cannot be empty ");
  } else {
    setSuccess(date);
  }
};

//======================= REGEX FORMS =============================//


// ================================== onclick function =============================================== //
const validateInputs = () => {
  // // ==========================  input values  ============================== //
  // let nameValue = document.getElementById("name").value;
  // let brandValue = document.getElementById("brand").value;
  // let priceValue = document.getElementById("price").value;
  // let dateValue = document.getElementById("date").value;
  // let typeValue = document.getElementById("type").value;
  // let diss= document.getElementsByName("discount");
  //======================= first name validaton ====================//
  if (nameValue === "") {
    setError(namee, " Name is required");
  } else if (nameValue.length > 30) {
    setError(
      namee,
      "name is too long, it should be less than 30 characters "
    );
  } else if (myRegex.test(nameValue) === false) {
    setError(name, "first  name cannot contain numbers");
  } else {
    setSuccess(name);
  }
    
  //======================= first name validaton =========================//
    
  if (brandValue === "") {
    setError(brand, "brand is required , cannot be empty ");
  } else if (brandValue.length > 30) {
    setError(
      brand,
      "brand is too long, it should be less than 30 characters "
    );
  } else if (myRegex.test(brandValue) === false) {
    setError(brand, "last  name cannot contain numbers");
  } else {
    setSuccess(brand);
  }
    
    
  //======================= price Validation =============================//
    
  if (priceValue === "") {
    setError(price, "price is required , cannot be empty ");
  } else if (priceValue.length > 14) {
    setError(price, "price is too long");
  } else if (priceRe.test(priceValue) === false) {
    setError(price, "price is invalid");
  } else {
    setSuccess(price);
  }
  //======================= date Validation =============================//
  if (dateValue === "") {
    setError(date, "date is required , cannot be empty ");
  } else if (dateValue.length > 50) {
    setError(date, "date is too long");
  } else {
    setSuccess(date);
  }
  //======================= group Validation =============================//
  if (diss[0].checked == false && diss[1].checked == false) {
    setError(date, "Please you have to choose your gender");
  } else {
    setSuccess(date);
  } 
};
