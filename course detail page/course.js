
///////////////////////////////HERE LIES THE VARIABLE NAMES///////////////////////////
const video_list = document.querySelector('.video_list');
const OutSide = document.querySelector('#out_side');
const OutSide1 = document.querySelector('#out_side1');
const OutSide2 = document.querySelector('#out_side2');
const OutSide3 = document.querySelector('#out_side3');
const course_info_content = document.querySelector('.course_info_content')


/////////////////////// THIS IS FOR OPENING MORE VIDEOS ///////////////////////
function openNav(){
  document.getElementById("VidNav").style.width = "85%";
  document.getElementById('cls_Vid_btn').style.opacity= "100%";
}

/////////////////////// THIS IS FOR CLOSING MORE VIDEOS ///////////////////////
 function closeNav(){
  document.getElementById("VidNav").style.width = "0%";
}

 /////////////////////// THIS IS FOR OPENING MENU NAVIGATIONS ///////////////////////
function closeMenuNav(){
  document.getElementById("MenuNav").style.opacity = 0;
  document.getElementById("MenuNav").style.visibility = "hidden";
}

/////////////////////// THIS IS FOR OPENING MENU NAVIGATIONS ///////////////////////
 function MenuNav(){
  document.getElementById("MenuNav").style.opacity = 1;
  document.getElementById("MenuNav").style.visibility = "visible";         
}

/////////////////////// THIS IS FOR CLOSING MENU AND VIDEO NAVIGATIONS WHEN USERS CLICK OUTSIDE///////////////////////
OutSide.addEventListener('click', closeMenuNav);
OutSide.addEventListener('click', closeNav);
OutSide2.addEventListener('click', closeMenuNav);
OutSide2.addEventListener('click', closeNav);
OutSide3.addEventListener('click', closeNav);