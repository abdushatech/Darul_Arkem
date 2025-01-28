// Handle registration form submission
document.getElementById("registration-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const messageElement = document.getElementById("message");

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        });

        if (response.ok) {
            messageElement.innerText = "Thank you for registering!";
            form.reset(); // Clear the form
        } else {
            messageElement.innerText = "Oops! Something went wrong. Please try again.";
        }
    } catch (error) {
        messageElement.innerText = "Oops! Something went wrong. Please try again.";
        console.error("Formspree Error:", error);
    }
});

// Display a random Quran verse
const verseText = document.getElementById("verse-text");
const verses = [
    "Indeed, Allah is with the patient. (Quran 2:153)",
    "And We have certainly made the Quran easy for remembrance, so is there any who will remember? (Quran 54:17)",
    "Verily, with hardship comes ease. (Quran 94:6)",
    "So remember Me; I will remember you. (Quran 2:152)",
    "And establish prayer and give zakah and bow with those who bow. (Quran 2:43)",
];

verseText.innerText = verses[Math.floor(Math.random() * verses.length)];

// Countdown to next session
const countdownTimer = document.getElementById("countdown-timer");
const nextSessionTime = new Date();
nextSessionTime.setHours(17, 0, 0); // Set the next session time (5 PM)

function updateCountdown() {
    const now = new Date();
    const timeLeft = nextSessionTime - now;

    if (timeLeft > 0) {
        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownTimer.innerText = `${hours}h ${minutes}m ${seconds}s`;
    } else {
        countdownTimer.innerText = "Session has started!";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();
