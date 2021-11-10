function expandHamburger() {
    var x = document.getElementById("hamburger_div");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }