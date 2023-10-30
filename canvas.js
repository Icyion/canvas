const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const con = canvas.getContext('2d');


let mouse = {
  x: undefined,
  y: undefined
}

window.addEventListener('mousemove', 
    function(event){
      mouse.x = event.x;
      mouse.y = event.y;
      console.log(event);
    })



class Circles {
  constructor (x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
  }
  draw(){
      con.beginPath();
      con.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      con.lineWidth = 2;
      con.fill();
      con.strokeStyle = 'blue';
      con.stroke();  
  }
  update(){
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
    

    this.draw();
  }
}

let circleArray = [];

for (let i = 0; i < 100; i++) {
    let radius = 60;
    let x = Math.random() * (innerWidth - radius*2) + radius;
    let y = Math.random() * (innerHeight - radius*2) + radius;
    let dx = (Math.random() - 0.5) * 10;
    let dy = (Math.random() - 0.5) * 10;

    circleArray.push(new Circles(x, y, dx, dy, radius));
}

function animate () {
  requestAnimationFrame(animate);
      con.clearRect(0,0,innerWidth,innerHeight); 

    for (let i = 0; i < circleArray.length; i++) {
      circleArray[i].update();
    }
};

animate();