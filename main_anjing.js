const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();
img.src = "assets/chara/anjing_main.png";

let imgBackward = new Image();
imgBackward.src = "assets/chara/anjing_main_backward.png"

let x = 0;
let y = 0;
let vxl = 0;
let vxr = 0;
let vy = 0;

let itemX = Math.floor(Math.random() * (canvas.width - 50));
let itemY = Math.floor(Math.random() * (canvas.height - 50));

let score = 0;
const numItems = 5;

const time = 3000; // Game time in seconds
let remainingTime = time;

let laparStat = sessionStorage.getItem("lapar");
console.log(laparStat);
let lelahStat = sessionStorage.getItem("lelah");
let happyStat = sessionStorage.getItem("happy");

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  if (x + vxr + 50 > canvas.width) vxr = 0;
  if (x + vxl < 0) vxl = 0;
  if (y + vy + 50 > canvas.height) vy = 0;
  if (y + vy < 0) vy = 0;

  let currentImg = vxr > 0 ? img : imgBackward;
  
  x += vxl;
  x += vxr;
  y += vy;
  
  ctx.drawImage(currentImg, x, y, 50, 50);
  
  ctx.fillStyle = "red";
  for (let i = 0; i < numItems; i++) {
    ctx.fillRect(items[i].x, items[i].y, 20, 20);
    
    if (x < items[i].x + 20 &&
        x + 50 > items[i].x &&
        y < items[i].y + 20 &&
        y + 50 > items[i].y) {
      console.log("Item collected!");
      score++;
      items[i].x = Math.floor(Math.random() * (canvas.width - 50));
      items[i].y = Math.floor(Math.random() * (canvas.height - 50));
    }
  }
  
  // Draw the score and time remaining
  ctx.fillStyle = "black";
  ctx.font = "16px Ubuntu";
  ctx.fillText("Score: " + score, 10, 20);
  ctx.fillText("Time: " + remainingTime, canvas.width - 80, 20);
  
  remainingTime--;
  if (remainingTime == 0) {
    endGame();
  }
  
  requestAnimationFrame(update);
}

// Wait for the image to load before starting the update loop
img.onload = function() {
  update();
};

// Initialize the items
let items = [];
for (let i = 0; i < numItems; i++) {
  items.push({
    x: Math.floor(Math.random() * (canvas.width - 50)),
    y: Math.floor(Math.random() * (canvas.height - 50))
  });
}

function endGame() {
  console.log("Game over! Score: " + score);
  alert("Score: " + score);
  sessionStorage.setItem("lapar", laparStat);
  sessionStorage.setItem("lelah", lelahStat);
  sessionStorage.setItem("happy", happyStat);
  window.location.href="play.html";
}



