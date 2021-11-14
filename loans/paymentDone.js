function checkPendantCuota() {
  var pendantCuota = localStorage.getItem("cuotaNeeded").split("/");
  var cuotaLeft = Number(pendantCuota[0]) - 1;
  if (cuotaLeft == 0) {
    localStorage.removeItem("cuotaNeeded");
    localStorage.removeItem("cuotaDates");
    localStorage.removeItem("amount");
    localStorage.removeItem("cuotaValue");
  } else {
    localStorage.setItem(
      "cuotaNeeded",
      cuotaLeft.toString() + "/" + pendantCuota[1]
    );
  }
  window.document.location = "../signIn/home.html";
}
