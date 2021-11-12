function getProfileImage() {
  localStorage.removeItem("profileImage");
  localStorage.setItem(
    "profileImage",
    document.getElementById("profileImage").value
  );
  console.log(document.getElementById("profileImage").value.split("'\\")[2]);
  saveName();
}

function saveName() {
  localStorage.removeItem("name");
  localStorage.setItem("name", document.getElementById("name").value);
  window.document.location = "../signUp/signUpStepSix.html";
}
