const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const msec = document.getElementById("msec");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

var Interval;
start.addEventListener("click", () => {
  Interval = setInterval(() => {
    msec.innerHTML++;

    if (msec.innerHTML <= 9) {
      msec.innerHTML = "0" + msec.innerHTML;
    }

    if (msec.innerHTML == 100) {
      msec.innerHTML = 0;

      secFunc();
    }
  }, 10);
});

// handling secs
var secFunc = () => {
  sec.innerHTML++;
  if (sec.innerHTML <= 9) {
    sec.innerHTML = "0" + sec.innerHTML;
  }

  if (sec.innerHTML == 60) {
    sec.innerHTML = 0;

    minFunc();
  } else {
  }
};

// handling mins
var minFunc = () => {
  if (min.innerHTML <= 9) {
    min.innerHTML = "0" + min.innerHTML;
  }

  if (min.innerHTML >= 60) {
    min.innerHTML = 0;

    hrsFunc();
  } else {
    min.innerHTML++;
  }
};
// handling hours
var hrsFunc = () => {
  if (hrs.innerHTML <= 9) {
    hrs.innerHTML = "0" + hrs.innerHTML;
  }

  if (hrs.innerHTML >= 60) {
    hrs.innerHTML = 0;

    stopFunc();
    alert("Timer is fully filled");
  } else {
    hrs.innerHTML++;
  }
};
// stop function expression
var stopFunc = () => {
  clearInterval(Interval);
  console.log("stopping");
};

// reset function expression
var resetFunc = () => {
  clearInterval(Interval);
  msec.innerHTML = "00";
  sec.innerHTML = " 00";
  min.innerHTML = "00";
  hrs.innerHTML = "00";
};

// callinbg stop function

stop.addEventListener("click", () => {
  stopFunc();
});
// calling reset function
reset.addEventListener("click", () => {
  resetFunc();
});
