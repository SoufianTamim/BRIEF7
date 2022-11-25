



// ============================ create variables =================================================== //
const form = document.getElementById("form");
const namee = document.getElementById("name");
const brand = document.getElementById("brand");
const price = document.getElementById("price");
const type = document.getElementById("type");
const date = document.getElementById("date");
const discount = document.getElementsByName('discount');


let myRegex = /^[a-zA-Z-\s]+$/;
let phoneRe = / /g;





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
// firstname.onblur = () =>{
//   const firstnameValue = firstname.value.trim();
//   if (firstnameValue === "") {
//     setError(firstname, "First Name is required");
//   } else if (firstnameValue.length > 15) {
//     setError(
//       firstname,
//       "first name is too long, it should be less than 15 characters "
//     );
//   } else if (myRegex.test(firstnameValue) === false) {
//     setError(firstname, "first  name cannot contain numbers");
//   } else {
//     setSuccess(firstname);
//   }
// }
// lastname.onblur = () =>{
//   const lastnameValue = lastname.value.trim();
//   if (lastnameValue === "") {
//     setError(lastname, "last name is required , cannot be empty ");
//   } else if (lastnameValue.length > 15) {
//     setError(
//       lastname,
//       "last name is too long, it should be less than 15 characters "
//     );
//   } else if (myRegex.test(lastnameValue) === false) {
//     setError(lastname, "last  name cannot contain numbers");
//   } else {
//     setSuccess(lastname);
//   }
// }
// phone.onblur = () =>{
//   const phoneValue = phone.value.trim();
//   let phoneRe = /([+])?(212)?0[5-7]\d{8}$/g;
//   if (phoneValue === "") {
//     setError(phone, "phone number is required , cannot be empty ");
//   } else if (phoneValue.length > 14) {
//     setError(phone, "phone number is too long");
//   } else if (phoneRe.test(phoneValue) === false) {
//     setError(phone, "phone number is invalid");
//   } else {
//     setSuccess(phone);
//   }
// }
// email.onblur = () => {
//   const emailValue = email.value.trim();
//   let emailRe =/([a-z])+\.?([a-z])+\.?([a-z])+?([0-9]?)@(gmail|hotmail|yahoo|ofppt).(com|org|net|ma)/g;
//   if (emailValue === "") {
//     setError(email, "email is required , cannot be empty ");
//   } else if (emailValue.length > 50) {
//     setError(email, "email is too long");
//   } else if (emailRe.test(emailValue) === false) {
//     setError(email, "email is invalid");
//   } else {
//     setSuccess(email);
//   }
// }
//======================= REGEX FORMS =============================//


// ================================== onclick function =============================================== //



















const validateInputs = () => {
  // ======================= variables Values  ======================//
  const nameValue = namee.value;
  const brandValue = brand.value;
  const priceValue = price.value;
  const typeValue = type.value;
  const dateValue = date.value;


  const arr = [];
  //======================= name validaton ====================//


  if (nameValue === "") {
    setError(namee, "name is required");
    arr.push(false)
  } else if (nameValue.length > 30) {
    setError(
      namee,
      "first name is too long, it should be less than 30 characters "
    );
    arr.push(false)
  } else if (myRegex.test(nameValue) === false) {
    setError(namee, "first  name cannot contain numbers");
    arr.push(false)

  } else {
    setSuccess(namee);
  }



  //======================= first name validaton =========================//
  if (brandValue === "") {
    setError(brand, "last name is required , cannot be empty ");
    arr.push(false)
  } else if (brandValue.length > 30) {
    setError(
      brand,
      "last name is too long, it should be less than 30 characters "
    );
    arr.push(false)
  // } else if (myRegex.test(brandValue) === false) {
  //   setError(brand, "last  name cannot contain numbers");
  //   arr.push(false)
  } else {
    setSuccess(brand);
  }
  //======================= phone Validation =============================//








  if (priceValue === "") {
    setError(price, "phone number is required , cannot be empty ");
    arr.push(false)
  } else if (priceValue.length > 14) {
    setError(price, "phone number is too long");
    arr.push(false)
  // } else if (phoneRe.test(priceValue) === false) {
  //   setError(price, "phone number is invalid");
  //   arr.push(false)
  } else {
    setSuccess(price);
  }

  //======================= email Validation =============================//
  if (emailValue === "") {
    setError(email, "email is required , cannot be empty ");
    arr.push(false)
  } else if (emailValue.length > 50) {
    setError(email, "email is too long");
    arr.push(false)
  // } else if (emailRe.test(emailValue) === false) {
  //   setError(email, "email is invalid");
  //   arr.push(false)
  } else {
    setSuccess(emai
      
      
      
      
      );
  }
  //======================= group Validation =============================//
  if (discount[0].checked == false && discount[1].checked == false) {
    document.querySelector('.error').innerHTML = "Please you have to choose your gender"
    arr.push(false)
  }
  
  // if (arr.length === 0) {
  //   document.getElementById('form').submit();
  // }
};
