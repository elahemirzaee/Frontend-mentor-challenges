// TOGGLE MENU ICON

const toggle = document.getElementById('toggle');
const menu = document.getElementsByClassName('item');
var links = document.getElementById("links");
const background = document.querySelector('nav');
background.style.backgroundColor = 'transparent';

// TOGGLE MENU ICON
function toggleIcon() {
  toggle.classList.toggle('active');
  // menu.style.display = 'block'; 
  var x = document.getElementById("links");
    if(x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
    background.style.backgroundColor = 'black';
    // if(background.style.backgroundColor == 'black') {
    //   background.style.backgroundColor = 'transparent';
    // }
}
toggle.addEventListener('click', toggleIcon);



/////////////////////////////////////////////





//Accordion Menu for rotating icon
let accordion = document.getElementsByClassName("item");
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", clicked);
}

function clicked(event) {
    event.target.querySelectorAll('.arrow')[0].classList.toggle('rotated');
}



//Show the dropdown menu
function firstDrop() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function secondDrop() {
  document.getElementById("mySecDropdown").classList.toggle("show");
}
function thirdDrop() {
  document.getElementById("myThirdDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdown = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdown.length; i++) {
      var openDropdown = dropdown[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
