const timerUpdate = document.querySelector(".timer-update");
const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset");
const minute = document.querySelector(".min");
const seconds = document.querySelector(".sec");
const miliseconds = document.querySelector(".ms");

let ms = 0;
let sec = 0;
let min = 0;
let cron;

const resetStringNumbers = () => {
    miliseconds.innerHTML = "00";
    seconds.innerHTML = "00";
    miliseconds.innerHTML = "00";
};
const clear = () => {
    ms = 0;
    min = 0;
    sec = 0;
};

init = () =>
    (cron = setInterval(() => {
        cronometro();
    }, 10));

const cronometro = () => {
    ms++;
    ms < 100 ? 0 : ((ms = 0), sec++);
    sec == 60 ? ((sec = 0), min++) : 0;    

    min < 10 ? (minute.innerHTML = "0" + min) : (minute.innerHTML = min);
    sec < 10 ? (seconds.innerHTML = "0" + sec) : (seconds.innerHTML = sec);
    ms < 10 ? (miliseconds.innerHTML = "0" + ms) : (miliseconds.innerHTML = ms);
};

start.addEventListener("click", () => {
    clearInterval(cron);
    init();
});
pause.addEventListener("click", () => {
    clearInterval(cron);
});
reset.addEventListener("click", () => {
    clearInterval(cron);
    clear();
    resetStringNumbers();
});
