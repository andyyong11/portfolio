// Define Timer class
class Timer {
    constructor(durationInput, startBtn, resetBtn, hoursDisplay, minutesDisplay, secondsDisplay) {
        this.durationInput = durationInput;
        this.startBtn = startBtn;
        this.resetBtn = resetBtn;
        this.hoursDisplay = hoursDisplay;
        this.minutesDisplay = minutesDisplay;
        this.secondsDisplay = secondsDisplay;
        this.timerInterval = null;
    }

    start() {
        let duration = this.durationInput.value;
        if (duration <= 0) {
            alert('Please enter a valid duration greater than 0 minutes.');
            return;
        }
        let durationInSeconds = duration * 60;
        clearInterval(this.timerInterval);
        let startTime = Date.now();
        let endTime = startTime + durationInSeconds * 1000;
        this.updateCountdown();

        this.timerInterval = setInterval(() => {
            let currentTime = Date.now();
            let remainingTime = Math.max(0, endTime - currentTime);
            if (remainingTime === 0) {
                clearInterval(this.timerInterval);
                alert('Timer finished!');
                return;
            }
            this.updateCountdown(remainingTime);
        }, 1000);
    }

    reset() {
        clearInterval(this.timerInterval);
        this.durationInput.value = '';
        this.hoursDisplay.textContent = '00';
        this.minutesDisplay.textContent = '00';
        this.secondsDisplay.textContent = '00';
    }

    updateCountdown(remainingTime) {
        let hours = Math.floor(remainingTime / (60 * 60 * 1000));
        let minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
        let seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);

        this.hoursDisplay.textContent = this.padZero(hours);
        this.minutesDisplay.textContent = this.padZero(minutes);
        this.secondsDisplay.textContent = this.padZero(seconds);
    }

    padZero(num) {
        return (num < 10 ? '0' : '') + num;
    }
}

// Initialize Timer instance
const timer = new Timer(
    document.getElementById('duration'),
    document.getElementById('startBtn'),
    document.getElementById('resetBtn'),
    document.getElementById('hours'),
    document.getElementById('minutes'),
    document.getElementById('seconds')
);

// Event listeners for start and reset buttons
timer.startBtn.addEventListener('click', () => timer.start());
timer.resetBtn.addEventListener('click', () => timer.reset());
