function saveNewLoan() {
  localStorage.removeItem("amount");
  localStorage.removeItem("time");
  localStorage.setItem("amount", document.getElementById("amount").value);
  localStorage.setItem("time", document.getElementById("time").value);
  window.document.location = "../personalLoans/loanStepThree.html";
}
