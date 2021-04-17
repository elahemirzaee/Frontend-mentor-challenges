let accordion = document.getElementsByClassName("q");

for (var i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", clicked);
  
}

function clicked(event) {
  this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
    event.target.getElementsByClassName('arrow')[0].classList.toggle('rotated');
}
