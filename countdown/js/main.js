const items = document.querySelectorAll('.counter__item > h4');
const countdownEl = document.querySelector('.countdown__content');

let countdownDate = new Date(2022, (9-1), 7, 14, 0, 0).getTime();

function getCountTime() {
    const distance = countdownDate - new Date().getTime();

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);

    const values = [days, hours, minutes, seconds];

    items.forEach((item, index) => {
        item.textContent = values[index];
    })

    if(distance < 0) {
        clearInterval(countdownCounter);
        countdownEl.innerHTML = `<h4 class="coutdown__finish">time is out!</h4>`
    }
}

let countdownCounter = setInterval(getCountTime, 1000);
getCountTime()