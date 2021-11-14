function signIn() {
    var asdf =document.getElementById("mail").value
    var dsf =localStorage.getItem("signUpEmail")
    var sdf =document.getElementById("password").value
    var aisdfu = localStorage.getItem("password")
  if (
    document.getElementById("mail").value == localStorage.getItem("signUpEmail") &&
    document.getElementById("password").value == localStorage.getItem("password")
  ) {
    window.document.location = "../signIn/home.html";
  }
}
