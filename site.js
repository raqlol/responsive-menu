var menuIcon = document.getElementById("menu-icon");
menuIcon.addEventListener("click", determinesState);
function determinesState () {
  this.classList.toggle('open');
  var opened = document.getElementById("dropdown").classList.contains('open-menu');
  if (opened) {
    document.getElementById("dropdown").classList.remove('open-menu');
  }
  else {
    document.getElementById("dropdown").classList.add('open-menu');
  }
}
