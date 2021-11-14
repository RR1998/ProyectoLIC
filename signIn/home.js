function checkPaymentInformation() {
  if (localStorage.getItem("account") == null) {
    window.document.location = "../qrPayment/qrPaymentLinkOne.html";
  } else {
    window.document.location = "../loans/payLoan.html";
  }
}
