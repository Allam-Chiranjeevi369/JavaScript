const animatedElement = document.querySelector('#circle');
let rotationAngle = 0;

function rotateSlowly() {
  rotationAngle++;
  animatedElement.style.transform = `rotate(${rotationAngle}deg)`;
}

animatedElement.addEventListener("click",()=> {setInterval(rotateSlowly, 30);} );