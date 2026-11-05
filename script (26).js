const greetingElement = document.getElementById("greeting");

function updateGreeting() {
    const currentHour = new Date().getHours();
    let greetingText = "";

    if (currentHour >= 5 && currentHour < 12) {
        greetingText = "Good Morning! 🌅";
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingText = "Good Afternoon! ☀️";
    } else {
        greetingText = "Good Evening! 🌙";
    }

    greetingElement.innerText = greetingText;
}

// Function call karo jab page load ho
updateGreeting();