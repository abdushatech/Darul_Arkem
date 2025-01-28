// Handle registration form submission
document.getElementById("registration-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        });

        if (response.ok) {
            document.getElementById("message").innerText = "Thank you for registering!";
            form.reset(); // Clear the form
        } else {
            document.getElementById("message").innerText = "Oops! Something went wrong. Please try again.";
        }
    } catch (error) {
        document.getElementById("message").innerText = "Oops! Something went wrong. Please try again.";
        console.error("Formspree Error:", error);
    }
});
