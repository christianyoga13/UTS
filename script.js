var firstImg = $('.first');
let name = "";
let wearAksesoris = 0;

var images = ["assets/chara/anjing_songong.png", "assets/chara/bear_songong.png"];

// $(document).ready(function(){
let currentImgIndex = localStorage.getItem('currentImgIndex') || 0;
console.log(currentImgIndex);

if (window.location.href.indexOf("play.html") > -1) {
  $("#message").text("Selamat pagi " + localStorage.getItem("name"));
  alert("Selamat pagi " + localStorage.getItem("name"));
}

$(".nameChar").text(localStorage.getItem("name"));

$("#startPlay").click(function() {
  name = $("#name").val();
  localStorage.setItem("name", name);
  window.location.href = "play.html";
});

$(".btn-close").click(function() {
  sessionStorage.removeItem('lapar');
  sessionStorage.removeItem('lelah');
  sessionStorage.removeItem('happy');
  window.location.href = "index.html";
});

if (currentImgIndex >= images.length) {
  currentImgIndex = 0;
}

firstImg.attr('src', images[currentImgIndex]);

$('.next').on('click', function() {
  currentImgIndex++;

  var audio = document.getElementById("open-sound");
  audio.play();

  localStorage.setItem('currentImgIndex', currentImgIndex);
  console.log(currentImgIndex);
  if (currentImgIndex >= images.length) {
    currentImgIndex = 0;
  }

  firstImg.attr('src', images[currentImgIndex]);
});

$('.prev').on('click', function() {
  currentImgIndex--;

  var audio = document.getElementById("open-sound");
  audio.play();

  if (currentImgIndex < 0) {
    currentImgIndex = images.length - 1;
  }

  localStorage.setItem('currentImgIndex', currentImgIndex);
  console.log(currentImgIndex);

  firstImg.attr('src', images[currentImgIndex]);
});

if (currentImgIndex % 2 === 0) {


  $("#character").css("background-image", "url(assets/chara/anjing_idle.png)");
  document.querySelector('#character').addEventListener('click', function() {
    var barkSound = new Audio('assets/sfx/rawr.mp3');
    barkSound.play();
  });

} else {
  $("#character").css("background-image", "url(assets/chara/bear_idle.png)");
  document.querySelector('#character').addEventListener('click', function() {
    var rawrSound = new Audio('assets/sfx/bark.mp3');
    rawrSound.play();
  });
}
// });

// function updateClock() {
//           var jamElem = document.getElementById("jam");
//           var greetingElem = document.getElementById("message");
//           var backgroundElem = document.getElementById("background");
//           var dateTime = new Date();
//           let playerName = localStorage.getItem("name");
//           dateTime.setMinutes(dateTime.getMinutes() + 30 * dateTime.getSeconds());

//           var roundedMinutes = Math.round(dateTime.getMinutes() / 30) * 30;
//           dateTime.setMinutes(roundedMinutes);

//           var minutes = dateTime.getMinutes();
//           var hours = dateTime.getHours();

//           if (hours >= 24) {
//             hours -= 24;
//           }

//           if (hours < 10) {
//             hours = "0" + hours;
//           }

//           if (minutes < 10) {
//             minutes = "0" + minutes;
//           }

//           var timeString = hours + ":" + minutes;
//           jamElem.setAttribute("datetime", dateTime.toISOString());
//           jamElem.textContent = timeString;

//           if (hours >= 6 && hours <= 10) {
//             greetingElem.textContent = "Selamat Pagi" + playerName + "!";
//             backgroundElem.style.backgroundImage = "url('assets/bg/background_pagi.jpg')";
//           } 
//           if (hours >= 11 && hours <= 14) {
//             greetingElem.textContent = "Selamat Siang";

//           } else if (hours >= 15 && hours <= 18) {
//             greetingElem.textContent = "Selamat Sore";
//             backgroundElem.style.backgroundImage = "url('assets/bg/background_sore.jpeg')";

//           } else if(hours >= 19 && hours < 24 || hours >= 0 && hours < 6 ) {
//             greetingElem.textContent = "Selamat Malam";
//             backgroundElem.style.backgroundImage = "url('assets/bg/background_malam.jpg')";
//           }
//         }

//         setInterval(updateClock, 1000);

// let playerName = localStorage.getItem("name");
// let messageDiv = document.querySelector("#message");
// function aturWaktu(callback, interval) {
//   setInterval(callback, interval);
// }
// let waktuAwal = Date.now();

// setInterval(function() {
//   let time = Date.now() - waktuAwal;
//   let minutes = Math.floor(time / 60000) % 60;
//   let hours = Math.floor(time / 3600000) % 24;
//   if(hours >= 6 && hours < 17) {
//     messageDiv.textContent = "Selamat Pagi, " + playerName + " !";
//     $('#background').css('background-image', "url(assets/bg/background_pagi.jpg)");
//   }
//   else if(hours >= 17 && hours < 19) {
//     messageDiv.textContent = "Selamat Sore, " + playerName + " !";
//     $('#background').css('background-image', "url(assets/bg/background_sore.jpeg)");
//   }
//   else if(hours >= 19 && hours < 24 || hours >= 0 && hours < 6) {
//     messageDiv.textContent = "Selamat Malam, " + playerName + " !";
//     $('#background').css('background-image', "url(assets/bg/background_malam.jpg)");
//   }
//   updateClock();
// }, 1000);


// setInterval(function() {
//   let time = 0 + (Date.now() - waktuAwal) * speed;
//   let min = Math.floor(time / 60000) % 60;
//   let hour = Math.floor(time / 3600000) % 24;
//   if(hour >= 6 && hour < 16) {
//     messageDiv.textContent = "Selamat Pagi, " + playerName + " !";
//     $('#background').css('background-image', "url(assets/bg/background_pagi.jpg)");
//   }
//   else if(hour >= 17 && hour < 19) {
//     messageDiv.textContent = "Selamat Sore, " + playerName + " !";
//     $('#background').css('background-image', "url(assets/bg/background_sore.jpeg)");
//   }
//   else if(hour >= 19 && hour < 24 || hour >= 0 && hour < 6) {
//     messageDiv.textContent = "Selamat Malam, " + playerName + " !";
//     $('#background').css('background-image', "url(assets/bg/background_malam.jpg)");
//   }
//   updateClock();
// }, 1000);




// status status status status
let imgIndex = localStorage.getItem('currentImgIndex');
let fullHealth;
let lapar;
let lelah;
let happy;

if (sessionStorage.getItem("lelah") == null || sessionStorage.getItem("lapar") == undefined) {
  fullHealth = 100;
  lapar = 100;
  lelah = 100;
  happy = 100;
  // lapar = sessionStorage.setItem("lapar",lapar);
  // lelah = sessionStorage.setItem("lelah",lelah);
  // happy = sessionStorage.setItem("happy",happy);
} else {
  fullHealth = 100;
  lapar = sessionStorage.getItem("lapar");
  lelah = sessionStorage.getItem("lelah");
  happy = sessionStorage.getItem("happy");
}

let ngobat;

const updateBar = () => {
  document.querySelector(".feed-bar").style.width = `${lapar}%`;
  document.querySelector(".sleep-bar").style.width = `${lelah}%`;
  document.querySelector(".happy-bar").style.width = `${happy}%`;
  fullHealth = (lapar + lelah + happy) / 3;
  document.querySelector(".health-bar").style.width = `${fullHealth.toFixed(0)}%`;

  document.querySelector(".feed-bar").textContent = `${lapar}%`;
  document.querySelector(".sleep-bar").textContent = `${lelah}%`;
  document.querySelector(".happy-bar").textContent = `${happy}%`;
  document.querySelector(".health-bar").textContent = `${fullHealth.toFixed(0)}%`;
};

const kurangiValue = () => {
  lapar -= 1;
  lelah -= 1;
  happy -= 1;
  lapar = Math.max(lapar, 0);
  lelah = Math.max(lelah, 0);
  happy = Math.max(happy, 0);
  // fullHealth = 100 - lapar - lelah - happy;
  updateBar();
  cekKesehatan();
}

const intervalId = setInterval(() => {
  kurangiValue();
  cekKesehatan();
}, 1000);

function makan() {
  lapar += Math.floor(Math.random() * 20 + 10);
  lapar = Math.min(lapar, 100);
  updateBar();

  if (imgIndex % 2 === 0) {
    $("#character").css("background-image", "url(assets/chara/anjing_makan.png)");
    setTimeout(() => {
      if (wearAksesoris == 0) {
        $("#character").css("background-image", "url(assets/chara/anjing_idle.png)");
      } else {
        if (imgIndex % 2 === 0) {
          $("#character").css("background-image", "url(assets/chara/anjing_topi.png)");
        }
      }
    }, 2000);
  }
  else {
    $("#character").css("background-image", "url(assets/chara/bear_makan.png)");
    setTimeout(() => {
      if (wearAksesoris == 0) {
        $("#character").css("background-image", "url(assets/chara/bear_idle.png)");
      } else {
        if (imgIndex % 2 === 0) {
          $("#character").css("background-image", "url(assets/chara/bear_topi.png)");
        }
      }
    }, 2000);
  }
  // console.log(imgIndex);
}

function tidur() {
  if (lapar < 30) {
    alert("Im hungry.")
  }
  else {
    lelah += Math.floor(Math.random() * 20 + 10);
    lelah = Math.min(lelah, 100);
    updateBar();

    if (imgIndex % 2 === 0) {
      $("#character").css("background-image", "url(assets/chara/anjing_tidur.png)");
      setTimeout(() => {
        if (wearAksesoris == 0) {
          $("#character").css("background-image", "url(assets/chara/anjing_idle.png)");
        } else {
          if (imgIndex % 2 === 0) {
            $("#character").css("background-image", "url(assets/chara/anjing_topi.png)");
          }
        }
      }, 5000);
    }
    else {
      $("#character").css("background-image", "url(assets/chara/bear_tidur.png)");
      setTimeout(() => {
        if (wearAksesoris == 0) {
          $("#character").css("background-image", "url(assets/chara/anjing_idle.png)");
        } else {
          if (imgIndex % 2 === 0) {
            $("#character").css("background-image", "url(assets/chara/anjing_topi.png)");
          }
        }
      }, 5000);
    }
  }
  console.log(imgIndex);
}

function main() {
  if (lelah < 30) {
    alert("So sleepy.")
  }
  else {
    happy += Math.floor(Math.random() * 20 + 10);
    happy = Math.min(happy, 100);
    sessionStorage.setItem("lapar", lapar);
    sessionStorage.setItem("lelah", lelah);
    sessionStorage.setItem("happy", happy);
    sessionStorage.setItem("jam", jam);
    sessionStorage.setItem("detik", detik);
    sessionStorage.setItem("level", level);


    if (imgIndex % 2 === 0) {
      window.location.href = "main_anjing.html";
    }
    else {
      window.location.href = "main_bear.html";
    }
    updateBar();
  }
}

function obat() {
  let rataRata = (lapar + lelah + happy) / 3;

  if (rataRata < 50) {
    ngobat = Math.floor(Math.random() * 20 + 10);
    ngobat = Math.min(ngobat, 100 - fullHealth);
    lapar += ngobat;
    lelah += ngobat;
    happy += ngobat;
    lapar = Math.max(lapar, 0);
    lelah = Math.max(lelah, 0);
    happy = Math.max(happy, 0);
    updateBar();
  }
  else {
    alert("Your pet is healthy enough!");
  }
}

const cekKesehatan = () => {
  if (fullHealth <= 0) {
    clearInterval(intervalId);
    alert("Your pet is dead :'(. RIP " + nama);
  }
}

function aksesoris() {
  if (wearAksesoris == 0) {
    wearAksesoris = 1;
    if (imgIndex % 2 === 0) {
      $("#character").css("background-image", "url(assets/chara/anjing_topi.png)");
    }
    else {
      $("#character").css("background-image", "url(assets/chara/bear_topi.png)");
    }
  } else {
    wearAksesoris = 0;
    if (imgIndex % 2 === 0) {
      $("#character").css("background-image", "url(assets/chara/anjing_idle.png)");
    }
    else {
      $("#character").css("background-image", "url(assets/chara/bear_idle.png)");
    }
  }
}
function start() {
  window.location.href = "play.html";
}



