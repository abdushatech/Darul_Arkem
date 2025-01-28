// Handle registration form submission
document.getElementById("registration-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Send email using EmailJS
    emailjs.send("YOUR_EMAILJS_SERVICE_ID", "YOUR_EMAILJS_TEMPLATE_ID", {
        name: name,
        email: email,
        phone: phone
    })
    .then(() => {
        document.getElementById("message").innerText = `Thank you, ${name}! You have been registered.`;
    })
    .catch((error) => {
        document.getElementById("message").innerText = "Error: Registration failed. Please try again.";
        console.error("EmailJS Error:", error);
    });

    // Clear the form
    document.getElementById("registration-form").reset();
});
