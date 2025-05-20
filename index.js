// selecting side navbar
var sideNav = document.getElementById("sidenav");
var sidemenu = document.getElementById("sidemenu");
var close = document.getElementById("close");
sidemenu.addEventListener("click", function () {
  sideNav.style.right = "0";
  sideNav.style.display = "block";
});
//c;osing the block
close.addEventListener("click", function () {
  sideNav.style.right = "-50%";
  sideNav.style.display = "none";
});
