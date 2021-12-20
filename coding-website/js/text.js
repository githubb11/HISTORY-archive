function setHeight(fieldId){
  document.getElementById(fieldId).style.height = document.getElementById(fieldId).scrollHeight+'px';
}
setHeight('text');

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
} else {
      panel.style.display = "block";
}});}


function setHeight(fieldId){
  document.getElementById(fieldId).style.height = document.getElementById(fieldId).scrollHeight+'px';
}
setHeight('text1');

function setHeight(fieldId){
  document.getElementById(fieldId).style.height = document.getElementById(fieldId).scrollHeight+'px';
}
setHeight('text2');

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function toggle_visibility(id) {
  var e = document.getElementById(id);
  if(e.style.display == 'block')
     e.style.display = 'none';
  else
     e.style.display = 'block';
}


function filterContent(elmnt) {
  var x, i, val, show, showh2, showbr;
  val = elmnt.value;
  x = document.getElementById("leftmenuinnerinner").getElementsByTagName("*");
  for (i = 1; i < x.length; i++) {
    if (x[i].tagName == "H2") {
      if (showh2) {
        if (show == false) {
          showh2.style.display = "none";
        } else {
          showh2.style.display = "block";
}}
      show = false;
      showh2 = x[i];
}
    if (x[i].tagName == "BR") {
      if (showbr) {
        if (show == false) {
          showbr.style.display = "none";
        } else {
          showbr.style.display = "block";
        }}
      showbr = x[i];}
    if (x[i].tagName == "A") {
      if (x[i].innerHTML.toUpperCase().indexOf(val.toUpperCase()) == -1) {
        x[i].style.display = "none";
} else {
        x[i].style.display = "block";
        show = true;
}}
    if (showh2) {
      if (show == false) {
        showh2.style.display = "none";
      } else {
        showh2.style.display = "block";
}}}}

