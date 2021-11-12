function saveHome() {
  localStorage.removeItem("homePayment");
  localStorage.setItem("homePayment", document.getElementById("homePayment").value);
  window.document.location = "../personalLoans/loanStepFour.html";
}
