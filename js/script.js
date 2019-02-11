function $(id) {
  return document.getElementById(id);
}

function sayHello() {
  var height = $("about-right").clientHeight;
  alert(height);
}

window.addEventListener("load", function() {
    document.body.className = document.body.className.replace("fade-out", "");
});

var path = window.location.pathname;
var page = path.split("/").pop();

if(page === "index.html"){
  window.addEventListener("load", quickLinkColor);
  window.addEventListener("resize", quickLinkColor);
}

function quickLinkColor(){
  var buttons = document.getElementsByClassName("quick-link-button");
  if(window.innerWidth >= 496){
    buttons[3].className = buttons[3].className.replace("red-bg", "yellow-bg");
    buttons[4].className = buttons[4].className.replace("blue-bg", "red-bg");
    buttons[5].className = buttons[5].className.replace("yellow-bg", "blue-bg");
  }
  else{
    // if(buttons[3].className === "blue-bg");
    buttons[3].className = buttons[3].className.replace("yellow-bg", "red-bg");
    buttons[4].className = buttons[4].className.replace("red-bg", "blue-bg");
    buttons[5].className = buttons[5].className.replace("blue-bg", "yellow-bg");
  }
}



if(page === "about.html"){
  window.addEventListener("load", aboutHeight);
  window.addEventListener("resize", aboutHeight);
  window.addEventListener("load", fixedColumnWidth);
  window.addEventListener("resize", fixedColumnWidth);
}

function aboutHeight(){//adjust height of sidebar to right side height
  var elem = $("sidebar");
  elem.setAttribute("style", "height: auto");
  $("about-footer").setAttribute("style", "margin-top: auto");
  if(window.innerWidth >= 496){
    var sideHeight = $("sidebar").clientHeight;
    var rightHeight = $("about-right").clientHeight;
    if(rightHeight > sideHeight){ //right side longer than sidebar
      elem.setAttribute("style","height: " + rightHeight + "px"); //set sidebar height equal to that of right side\
      $("about-footer").setAttribute("style", "margin-top: " + rightHeight + "px");
    }
    else{ //position footer at bottom of sidebar
      $("about-footer").setAttribute("style", "margin-top: " + sideHeight + "px");
    }
  }
}

function fixedColumnWidth(){//adjust width of content in the second column in the fixed columns
  var col1 = document.getElementsByClassName("fixed-column-1");
  var col2 = document.getElementsByClassName("fixed-column-2");
  col2[0].setAttribute("style", "width: 100%");
  var totalWidth = col2[0].clientWidth - 120-16;
  if(totalWidth > 310){
    for(var i = 0; i < col2.length; i++){
      col1[i].setAttribute("style", "width: 120px");
      col2[i].setAttribute("style", "width: "+ totalWidth + "px");
    }
  }
  else{
    for(var i = 0; i < col1.length; i++){
      col1[i].setAttribute("style", "width: 100%");
    }
    for(var i = 0; i < col2.length; i++){
      col2[i].setAttribute("style", "width: 100%");
    }
  }
  aboutHeight();
}

function showCourseWork(){
  var elem = $("courseWork");
  if(elem.style.display === "block"){
    elem.setAttribute("style", "display: none");
  }
  else{
    elem.setAttribute("style", "display: block");
  }
  aboutHeight();
}

function showPMDesc(){
  var elem = $("desc-PM");
  if(elem.style.display === "block"){
    elem.setAttribute("style", "display: none");
  }
  else{
    elem.setAttribute("style", "display: block");
  }
  aboutHeight();
}

function showDesignStaff(){
  var elem = $("desc-DesignStaff");
  if(elem.style.display === "block"){
    elem.setAttribute("style", "display: none");
  }
  else{
    elem.setAttribute("style", "display: block");
  }
  aboutHeight();
}

function showTechAssist(){
  var elem = $("desc-TechAssist");
  if(elem.style.display === "block"){
    elem.setAttribute("style", "display: none");
  }
  else{
    elem.setAttribute("style", "display: block");
  }
  aboutHeight();
}

function showUWIntern(){
  var elem = $("desc-UWIntern");
  if(elem.style.display === "block"){
    elem.setAttribute("style", "display: none");
  }
  else{
    elem.setAttribute("style", "display: block");
  }
  aboutHeight();
}

function showAESIntern(){
  var elem = $("desc-AESIntern");
  if(elem.style.display === "block"){
    elem.setAttribute("style", "display: none");
  }
  else{
    elem.setAttribute("style", "display: block");
  }
  aboutHeight();
}
