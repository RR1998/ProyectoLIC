const AMOUNT_PER_REMITTANCES = 500.0;
const PAYMENT_AVAILABLE_MONEY = 0.1;

function saveRemittances() {
  localStorage.removeItem("remittancesOcurrences");
  localStorage.removeItem("peopleOnYou");
  localStorage.removeItem("cuotaValue");
  localStorage.removeItem("cuotaDates");
  localStorage.removeItem("cuotaNeeded");
  var remittances = document.getElementById("remittances");
  var remittancesFrequency = 0.0;
  if (remittances.options[remittances.selectedIndex].text == "Si") {
    var remittancesOcurrences = document.getElementById(
      "remittancesOcurrences"
    );
    localStorage.setItem(
      "remittancesOcurrences",
      remittancesOcurrences.options[remittancesOcurrences.selectedIndex].text
    );
    switch (
      remittancesOcurrences.options[remittancesOcurrences.selectedIndex].text
    ) {
      case "once":
        remittancesFrequency = 1.0;
        break;
      case "twice":
        remittancesFrequency = 2.0;
        break;
      case "weekly":
        remittancesFrequency = 4.0;
        break;
    }
  }
  localStorage.setItem(
    "peopleOnYou",
    document.getElementById("amountOfPeople")
  );
  localStorage.setItem(
    "cuotaValue",
    (parseFloat(localStorage.getItem("income")) -
      parseFloat(localStorage.getItem("homePayment")) +
      (remittancesFrequency * AMOUNT_PER_REMITTANCES) /
        parseFloat(document.getElementById("amountOfPeople").value)) *
      PAYMENT_AVAILABLE_MONEY
  );
  var actualDate = new Date();
  if (actualDate.getMonth() == 11) {
    var current = new Date(
      actualDate.getFullYear() + 1,
      12,
      actualDate.getDate()
    );
  } else {
    var current = new Date(
      actualDate.getFullYear(),
      (actualDate.getMonth() + 2).toString(),
      actualDate.getDate()
    );
  }
  var actualMonth = 0;
  if (current.getMonth() == 0) {
    actualMonth = 12;
  } else {
    actualMonth = current.getMonth() + 1;
  }
  localStorage.setItem("cuotaDates", current.getDate() + "/" + actualMonth);
  localStorage.setItem(
    "cuotaNeeded",
    localStorage.getItem("time") + "/" + localStorage.getItem("time")
  );
  window.document.location = "../personalLoans/loanStepFive.html";
}
