let nav_open = true;

function navControl() {
  if (nav_open == true) {
    closeNav();
    nav_open = false;
  }
  else {
    openNav();
    nav_open = true;
  }
}

function openNav() {
  document.querySelector("body").style.gridTemplateColumns = "225px 1fr";
}

function closeNav() {
  document.querySelector("body").style.gridTemplateColumns = "70px 1fr";
}