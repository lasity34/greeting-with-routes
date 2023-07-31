document.getElementById("reset-button").addEventListener("click", function(e) {
    if (!window.confirm("Are you sure you want to reset?")) {
      e.preventDefault(); // Prevent the form from submitting if the user clicks "Cancel"
    }
  });