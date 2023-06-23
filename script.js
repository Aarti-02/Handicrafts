let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {

menu.classList.toggle('fa-times');
navbar.classList.toggle('active');

}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');


if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 5000);
}

window.onload = fadeOut();




var col = document.querySelectorAll("#random")
console.log(col)
for(var i=0;i<col.length;i++){
 col[i].style.color=changeColor();
}
setInterval("changeColor()",300);
function getRandomColor(){
    var letters='9876543210ABCDEF';
    var color="#";
    for(var i=0;i<=5;i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}
function changeColor(){
    input=getRandomColor();
    for(var i=0;i<col.length;i++){
        col[i].style.color=input;
    }
}