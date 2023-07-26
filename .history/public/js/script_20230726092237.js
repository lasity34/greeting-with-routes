// Function to hide message after 4 seconds (or however long your CSS animation lasts)
function startMessageTimer() {
    // Clear any existing timer
    if (window.messageTimer) {
        clearTimeout(window.messageTimer);
    }

    const messageElement = document.getElementById('message');

    // Set the message element to be visible initially
    messageElement.style.display = 'block';

    // Start a new timer
    window.messageTimer = setTimeout(() => {
        // When the timer expires, hide the message element
        messageElement.style.display = 'none';
    }, 4000); // Duration of CSS animation in milliseconds
}

// Call the function to start the timer whenever the message changes
document.getElementById('message').addEventListener('DOMSubtreeModified', startMessageTimer);
