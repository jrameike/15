var heading = document.getElementById("heading");
var tabs = document.getElementsByClassName("tab");
var buttons = document.getElementsByTagName("button");

function changeTab(target, name) {
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
    buttons[i].classList.remove("selected");
  }
  target.currentTarget.classList.add("selected");
  document.getElementById(name).style.display = "block";
}
