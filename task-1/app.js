const addTimerButton = document.querySelector('#add-timer');

addTimerButton.addEventListener('click', () => {
    const timeInput = document.querySelector('#time-input');
    const startingSeconds = timeInput.value;

    if (startingSeconds > 0 && startingSeconds % 1 === 0) {
        timerCreate(startingSeconds);
    } else {
        alert('Введите корректное целое число, больше нуля!')
    }
    timeInput.value = '';
});

function startTimer(totalSeconds, display) {
    let seconds = totalSeconds;

    const timerId = setInterval(() => {
        seconds--;
        display.textContent = formatTime(seconds);

        if (seconds < 0) {
            display.parentElement.remove();
            clearInterval(timerId);
        }
    }, 1000)

    return { timerId };
}

function timerCreate(seconds) {
    const timersList = document.querySelector('#timers');
    const wrapper = document.createElement('li');
    const display = document.createElement('span');
    const stop = document.createElement('button');

    wrapper.classList.add("timer");
    display.textContent = formatTime(seconds);
    stop.textContent = 'X';
    stop.addEventListener("click", () => {
        clearInterval(wrapper.timer.timerId); // Останавливаем таймер
        wrapper.remove(); // Удаляем таймер из DOM
    });

    wrapper.appendChild(display);
    wrapper.appendChild(stop);
    timersList.appendChild(wrapper);

    wrapper.timer = startTimer(seconds, display);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = remainingSeconds.toString().padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}
