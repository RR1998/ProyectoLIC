function saveDocuments() {
  localStorage.removeItem("nit");
  localStorage.removeItem("dui");
  localStorage.removeItem("income");
  localStorage.setItem("nit", document.getElementById("nit").value);
  localStorage.setItem("dui", document.getElementById("dui").value);
  localStorage.setItem("dui", document.getElementById("income").value);
  window.document.location = "../signUp/signUpStepFive.html"
}
