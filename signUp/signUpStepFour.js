function saveDocuments() {
  localStorage.removeItem("nit");
  localStorage.removeItem("dui");
  localStorage.removeItem("income");
  localStorage.setItem("nit", document.getElementById("nit").value);
  localStorage.setItem("dui", document.getElementById("dui").value);
  localStorage.setItem("income", document.getElementById("income").value);
  localStorage.setItem(
    "maxAmount",
    (parseFloat(document.getElementById("income").value) * 0.8).toString()
  );
  window.document.location = "../signUp/signUpStepFive.html";
}
