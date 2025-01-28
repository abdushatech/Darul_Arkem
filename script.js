// Handle registration form submission
document.getElementById("registration-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Display success message
    document.getElementById("message").innerText = `Thank you, ${name}! You have been registered.`;

    // Clear the form
    document.getElementById("registration-form").reset();
});
