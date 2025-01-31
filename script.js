/***************************************
 * 1. Handle registration form submission
 ***************************************/
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

/*****************************
 * 2. Display a random Quran verse
 *****************************/
const verseText = document.getElementById("verse-text");
const verses = [
  "Indeed, Allah is with the patient. (Quran 2:153)",
  "And We have certainly made the Quran easy for remembrance, so is there any who will remember? (Quran 54:17)",
  "Verily, with hardship comes ease. (Quran 94:6)",
  "So remember Me; I will remember you. (Quran 2:152)",
  "And establish prayer and give zakah and bow with those who bow. (Quran 2:43)",
];

verseText.innerText = verses[Math.floor(Math.random() * verses.length)];

/****************************************
 * 3. Countdown to next session (11 PM)
 ****************************************/
const countdownTimer = document.getElementById("countdown-timer");

// Set next session time to today's 11 PM
const nextSessionTime = new Date();
nextSessionTime.setHours(23, 0, 0, 0); // 23:00 (11 PM local time)

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

/**********************************************
 * 4. Get Prayer Times Based on User's Location
 **********************************************/
const prayerTimesText = document.getElementById("prayer-times-text");

// Check if Geolocation is available
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;
      // Fetch prayer times from Al-Adhan API
      try {
        const response = await fetch(
          `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`
        );
        const data = await response.json();

        if (data && data.data && data.data.timings) {
          const timings = data.data.timings;
          /* Example: Fajr, Dhuhr, Asr, Maghrib, Isha, etc. */
          prayerTimesText.innerHTML = `
            <strong>Fajr:</strong> ${timings.Fajr}<br/>
            <strong>Dhuhr:</strong> ${timings.Dhuhr}<br/>
            <strong>Asr:</strong> ${timings.Asr}<br/>
            <strong>Maghrib:</strong> ${timings.Maghrib}<br/>
            <strong>Isha:</strong> ${timings.Isha}
          `;
        } else {
          prayerTimesText.innerText = "Unable to fetch prayer times.";
        }
      } catch (error) {
        console.error("Prayer Times Error:", error);
        prayerTimesText.innerText = "Error fetching prayer times.";
      }
    },
    (error) => {
      console.error("Geolocation Error:", error);
      prayerTimesText.innerText =
        "Location access denied. Unable to fetch prayer times.";
    }
  );
} else {
  prayerTimesText.innerText = "Geolocation is not supported by this browser.";
}
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    function showNextSlide() {
        slides[currentIndex].style.display = "none"; // Hide current image
        currentIndex = (currentIndex + 1) % slides.length; // Move to next
        slides[currentIndex].style.display = "block"; // Show next image
    }

    setInterval(showNextSlide, 3000); // Change image every 3 seconds
});

