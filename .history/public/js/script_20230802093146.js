document.getElementById("reset-button").addEventListener("click", function(e) {
    if (!window.confirm("Are you sure you want to reset?")) {
      e.preventDefault(); // Prevent the form from submitting if the user clicks "Cancel"
    }
  });


  if (document.getElementById('flash-message')) {
        setTimeout(() => {
          document.getElementById('flash-message').style.display = 'none';
        }, 5000); // 5-second delay
      } 