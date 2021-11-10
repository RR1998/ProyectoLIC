const init = function () {
  let messageSentDialog = document.getElementById("messageSentDialog");
  messageSentDialog.value =
    "Le hemos enviado un mensaje al número " +
    localStorage.getItem("phoneNumber");
};

document.addEventListener("DomContentLoaded", function () {
  init();
});
