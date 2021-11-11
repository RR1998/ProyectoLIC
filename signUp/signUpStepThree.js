function saveAccount() {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  localStorage.setItem(
    "signUpEmail",
    document.getElementById("mail").value
  );
  localStorage.setItem(
    "signUpEmail",
    document.getElementById("password").value
  );
  window.document.location = "../signUp/signUpStepFour.html";
}
