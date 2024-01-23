function checkPassword() {
    // Get the entered password from the user
    var enteredPassword = prompt("Enter the password:");

    // Check if the entered password is correct
    if (enteredPassword === "nusm@2022") {
        // Redirect to another page if the password is correct
        window.location.href = "explore.html";
    } else {
        // Stay idle if the password is incorrect
        alert("Incorrect password. Please try again.");
    }
}

// Call the function when the page is opened
checkPassword();