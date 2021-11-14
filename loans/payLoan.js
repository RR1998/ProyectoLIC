function refreshPaymentDate() {
  var paymentDate = localStorage.getItem("cuotaDates");
  localStorage.removeItem("cuotaDates");
  var newMonth = "0";
  if (parseInt(paymentDate.split("/")[1]) + 1 >= 13) {
    newMonth = "01";
  } else {
    newMonth = "0" + (parseInt(paymentDate.split("/")[1]) + 1).toString();
  }
  localStorage.setItem(
    "cuotaDates",
    paymentDate.split("/")[0] + "/" + newMonth
  );
  window.document.location = "../loans/paymentDone.html";
}
