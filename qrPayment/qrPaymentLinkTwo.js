function saveData() {
  localStorage.removeItem("bancary");
  localStorage.removeItem("account");
  localStorage.removeItem("qrEmail");
  localStorage.setItem(
    "qrEmail",
    document.getElementById("amountOfPeople")
  );
  localStorage.setItem(
    "bancary",
    document.getElementById("bancary").selectedIndex.text
  );
  localStorage.setItem("account", document.getElementById("account").value);
  window.document.location = "../qrPayment/qrPaymentLinkThree.html";
}
