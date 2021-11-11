function savePhoneNumber() {
  localStorage.removeItem('phoneNumber')
  localStorage.setItem(
    "phoneNumber",
    document.getElementById("country_code").value +
      document.getElementById("phone_number").value
  );
  window.document.location = "../signUp/signUpStepTwo.html";
}
