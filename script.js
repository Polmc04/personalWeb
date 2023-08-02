//-----------------------------------------toggle icon navbar--------------------------------//
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.menuNav');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    //-----------------------------------------remove navbar when clicked--------------------------------//
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

//-----------------------------------------rotate satellite--------------------------------//
var angle = 0;
function rotateSatellite() {
    angle += 80;
    document.querySelector('#Satellite-img').style.transform = "rotate(" + angle + "deg)";
};
setInterval(rotateSatellite, 2500);