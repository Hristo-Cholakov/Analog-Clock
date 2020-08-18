setInterval(setTheClock, 1000);

for (var i = 1, j = 30; i <= 12; i++, j+=30) {

document.querySelector(".number-" + i).style.transform = "rotate(" + j + "deg)";
document.querySelector(".inner-digit-" + i).style.transform = "rotate(-" + j + "deg)";
};

var soundEffect = document.getElementById("audio");
document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      soundEffect.muted = false;

    } else {
      soundEffect.muted = true;
    }
  });
});

function setTheClock(){
const secondHand = document.querySelector(".seconds");
const minuteHand = document.querySelector(".minutes");
const hourHand = document.querySelector(".hours");

const dateNow = new Date();
const seconsRotationRatio = dateNow.getSeconds() / 60;
const minsRotationRatio = (seconsRotationRatio + dateNow.getMinutes()) / 60;
const hoursRotationRatio = (minsRotationRatio + dateNow.getHours()) / 12;

setRotation(secondHand, seconsRotationRatio);
setRotation(minuteHand, minsRotationRatio);
setRotation(hourHand, hoursRotationRatio);

};

function setRotation(hand, ratio){
  hand.style.transform = "rotate(" + ratio*360 + "deg)";
};

setTheClock();
