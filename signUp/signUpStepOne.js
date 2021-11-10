"use strict";

const init = function () {
  let continueButton = document.querySelector("#continue");
  continueButton.addEventListener("click", function () {
    let phoneNumber = document.getElementById("phone_number");
    let countryCode = document.getElementById("country_code");

    localStorage.setItem("phoneNumber", countryCode.value + phoneNumber.value);
    window.document.location = "./signUpStepTwo.html";
  });
};

document.addEventListener("DOMContentLoaded", function () {
  init();
});
