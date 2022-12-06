/*
window.onload = function () {
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    const tens = document.getElementById('tens');

    const startBtn = document.getElementById('start-btn');
    const stoptBtn = document.getElementById('stop-btn');
    const resetBtn = document.getElementById('reset-btn');

    const lap = document.getElementById('laps');
    const lapTime = document.querySelector('.lap-time');

    startBtn.addEventListener('click', startWatch);

    let minutesSet = 00;
    let secondsSet = 00;
    let tensSet = 00;
    let interval = null;

    // Start Button
    function startWatch() {
        startBtn.removeEventListener('click', startWatch);
        lapTime.classList.add('dimming-effect');
        interval = setInterval(startTimer, 10);
        stoptBtn.addEventListener('click', stopWatch);
    };

    // Stop Button
    function stopWatch() {
        stoptBtn.removeEventListener('click', stopWatch);
        lapTime.classList.remove('dimming-effect');
        clearInterval(interval);
        const li = document.createElement('li');
        li.innerHTML = `lap : <span>${minutes.innerHTML}:${seconds.innerHTML}.${tens.innerHTML}</span>`;
        lap.appendChild(li);
        startBtn.addEventListener('click', startWatch);
    }

    // Reset Button
    resetBtn.onclick = () => {
        stoptBtn.removeEventListener('click', stopWatch);
        lapTime.classList.remove('dimming-effect');
        clearInterval(interval);
        minutesSet = '00';
        secondsSet = '00';
        tensSet = '00';
        minutes.innerHTML = minutesSet;
        seconds.innerHTML = secondsSet;
        tens.innerHTML = tensSet;
        lap.innerHTML = '';
        startBtn.addEventListener('click', startWatch);
    }

    // Create Start Timer function
    function startTimer() {
        tensSet++;
        if (tensSet < 9) {
            tens.innerHTML = '0' + tensSet;
        }
        if (tensSet > 9) {
            tens.innerHTML = tensSet;
        }
        if (tensSet > 99) {
            secondsSet++;
            seconds.innerHTML = '0' + secondsSet;
            tensSet = 0;
            tens.innerHTML = '0' + 0;
        }
        if (secondsSet > 9) {
            seconds.innerHTML = secondsSet;
        }
        if (secondsSet == 60) {
            minutesSet++;
            minutes.innerHTML = '0' + minutesSet;
            secondsSet = 0;
        }
        if (minutesSet > 9) {
            minutes.innerHTML = minutesSet;
        }
    }
}
*/

(function () {
    let stopWatch = {
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds'),
        tens: document.getElementById('tens'),
        startBtn: document.getElementById('start-btn'),
        stoptBtn: document.getElementById('stop-btn'),
        resetBtn: document.getElementById('reset-btn'),
        lap: document.getElementById('laps'),
        lapTime: document.querySelector('.lap-time'),
        minutesSet: 00,
        secondsSet: 00,
        tensSet: 00,
        interval: null,
        init: () => {
            stopWatch.startBtn.addEventListener('click', stopWatch.startWatch);
            stopWatch.resetBtn.addEventListener('click', stopWatch.resetWatch);
        },
        startWatch: () => {
            stopWatch.startBtn.removeEventListener('click', stopWatch.startWatch);
            stopWatch.lapTime.classList.add('dimming-effect');
            stopWatch.interval = setInterval(stopWatch.startTimer, 10);
            stopWatch.stoptBtn.addEventListener('click', stopWatch.stopWatch);
        },
        stopWatch: () => {
            stopWatch.stoptBtn.removeEventListener('click', stopWatch.stopWatch);
            stopWatch.lapTime.classList.remove('dimming-effect');
            clearInterval(stopWatch.interval);
            const li = document.createElement('li');
            li.innerHTML = `lap : <span>${stopWatch.minutes.innerHTML}:${stopWatch.seconds.innerHTML}.${stopWatch.tens.innerHTML}</span>`;
            stopWatch.lap.appendChild(li);
            stopWatch.startBtn.addEventListener('click', stopWatch.startWatch);
        },
        resetWatch: () => {
            stopWatch.stoptBtn.removeEventListener('click', stopWatch.stopWatch);
            stopWatch.lapTime.classList.remove('dimming-effect');
            clearInterval(stopWatch.interval);
            stopWatch.minutesSet = '00';
            stopWatch.secondsSet = '00';
            stopWatch.tensSet = '00';
            stopWatch.minutes.innerHTML = stopWatch.minutesSet;
            stopWatch.seconds.innerHTML = stopWatch.secondsSet;
            stopWatch.tens.innerHTML = stopWatch.tensSet;
            stopWatch.lap.innerHTML = '';
            stopWatch.startBtn.addEventListener('click', stopWatch.startWatch);
        },
        startTimer: () => {
            stopWatch.tensSet++;
            if (stopWatch.tensSet < 9) {
                stopWatch.tens.innerHTML = '0' + stopWatch.tensSet;
            }
            if (stopWatch.tensSet > 9) {
                stopWatch.tens.innerHTML = stopWatch.tensSet;
            }
            if (stopWatch.tensSet > 99) {
                stopWatch.secondsSet++;
                stopWatch.seconds.innerHTML = '0' + stopWatch.secondsSet;
                stopWatch.tensSet = 0;
                stopWatch.tens.innerHTML = '0' + 0;
            }
            if (stopWatch.secondsSet > 9) {
                stopWatch.seconds.innerHTML = stopWatch.secondsSet;
            }
            if (stopWatch.secondsSet == 60) {
                stopWatch.minutesSet++;
                stopWatch.minutes.innerHTML = '0' + stopWatch.minutesSet;
                stopWatch.secondsSet = 0;
            }
            if (stopWatch.minutesSet > 9) {
                stopWatch.minutes.innerHTML = stopWatch.minutesSet;
            }
        }
    };
    stopWatch.init();
})()