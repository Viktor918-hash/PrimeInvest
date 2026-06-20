const startTime = 900;

const timerElement = document.getElementById('timer');
const btnLink = document.getElementById('btn');
const btnLast = document.getElementById('btnLast');

function updateDisplay(time) {
    if (time <= 0) {
        timerElement.textContent = "00:00";
        timerElement.style.color = "#ff4444";
        btnLink.textContent = "Last Chance";
        btnLast.textContent = "Last Chance";
        return;
    }
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    const displaySeconds = seconds < 10 ? '0' + seconds : seconds;
    timerElement.textContent = `${displayMinutes}:${displaySeconds}`;
}

if (localStorage.getItem('timer_expired')) {
    updateDisplay(0);
} else {
    if (!localStorage.getItem('timer_end')) {
        const endTime = Date.now() + startTime * 1000;
        localStorage.setItem('timer_end', endTime);
    }

    const endTime = parseInt(localStorage.getItem('timer_end'), 10);

    const timerId = setInterval(() => {
        const timeLeft = Math.round((endTime - Date.now()) / 1000);

        if (timeLeft <= 0) {
            clearInterval(timerId);
            localStorage.removeItem('timer_end');
            localStorage.setItem('timer_expired', '1'); 
            updateDisplay(0);
            return;
        }

        updateDisplay(timeLeft);
    }, 1000);


    updateDisplay(Math.round((endTime - Date.now()) / 1000));
}
