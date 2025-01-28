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
