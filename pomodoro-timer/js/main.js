const startBtnEl = document.querySelector('.btn__start');
const inputEl = document.querySelector('.pomodoro__input'); 

function startTimer() {
    const click = new Audio('../sounds/click.mp3');
    const bell = new Audio('../sounds/bell.mp3');
    
    inputEl.classList.add('hiden')
    click.play();

    let minutes = inputEl.value - 1;
    if (inputEl.value == 0) {
        minutes = 24
    }
    let seconds = 59;
    
    document.querySelector('#minutes').innerHTML = minutes;
    document.querySelector('#seconds').innerHTML = seconds;

    let timerInterval = setInterval(timer, 1000);

    function timer(){
        seconds = seconds - 1;
        document.querySelector('#seconds').innerHTML = seconds;

        if(seconds <= 0) {
            seconds = 60;
            minutes = minutes - 1;
            document.querySelector('#minutes').innerHTML = minutes;
        }

        if(minutes == 0 && seconds == 1) {
            document.querySelector('#seconds').innerHTML = 0;
            document.querySelector('.finish__text').classList.remove('hiden');
            bell.play();
            clearInterval(timerInterval);
        }
    }
}

startBtnEl.addEventListener('click', startTimer)