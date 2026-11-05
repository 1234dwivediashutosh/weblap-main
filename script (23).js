let timeLeft = 25 * 60; // 25 minutes in seconds
let timerId = null;
let isRunning = false;

const timeDisplay = document.getElementById("time");

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    
    // Formatting: add leading zero if needed (e.g., 9 -> 09)
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    
    timeDisplay.innerText = `${formattedMinutes}:${formattedSeconds}`;
}

function startTimer() {
    if (isRunning) return; // Agar pehle se chal raha hai toh dubara na chale
    
    isRunning = true;
    timerId = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timerId);
            isRunning = false;
            alert("Pomodoro session complete! Take a break.");
        }
    }, 1000); // 1000ms = 1 second
}

function pauseTimer() {
    clearInterval(timerId);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timerId);
    isRunning = false;
    timeLeft = 25 * 60; // Reset back to 25 mins
    updateDisplay();
}

// Initial load par display update karein
updateDisplay();