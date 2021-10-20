let section = document.querySelector(".clock");
let icons = document.querySelector(".icons");

icons.addEventListener('click', () => {
    section.classList.toggle('dark')
})

setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let meridiem = hour < 12 ? "AM" : "PM";
    hour = hour > 12 ? hour - 12 : hour;
    hour = hour == 0 ? (hour = 12) : hour;

    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    document.querySelector(".hour__num").innerText = hour;
    document.querySelector(".min__num").innerText = minute;
    document.querySelector(".sec__num").innerText = second;
    document.querySelector(".am__pm").innerText = meridiem;
}, 1000);