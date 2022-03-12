const prevBtns = document.querySelectorAll('.btn__previous');
const nextBtns = document.querySelectorAll('.btn__next');
const progress = document.getElementById('progress');
const formSteps = document.querySelectorAll('.form__step');
const progressSteps = document.querySelectorAll('.progress__step');

let formStepsNum = 0;

nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        formStepsNum++;
        updateFormSteps();
        updateProgressBar();
    })
})

prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        formStepsNum--;
        updateFormSteps();
        updateProgressBar();
    })
})

function updateFormSteps() {
    formSteps.forEach(formStep => {
        formStep.classList.contains('form__step-active') &&
            formStep.classList.remove('form__step-active');
    })
    formSteps[formStepsNum].classList.add('form__step-active');
}

function updateProgressBar() {
    progressSteps.forEach((pregressStep, idx) => {
        if(idx < formStepsNum + 1) {
            pregressStep.classList.add('progress__step-active');
        } else {
            pregressStep.classList.remove('progress__step-active');
        }
    })

    const progressActive = document.querySelectorAll('.progress__step-active')

    progress.style.width = ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + '%';
}