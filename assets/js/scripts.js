// Function to open the popup
function openPopup() {
    var popupOverlay = document.getElementById("popupOverlay");
    popupOverlay.style.display = "flex";
    popupOverlay.classList.add("fade-in"); // Add the fade-in class
  }
  
    
    // Function to close the popup
    function closePopup() {
      var popupOverlay = document.getElementById("popupOverlay");
      popupOverlay.classList.remove("fade-in"); // Remove the fade-in class
      popupOverlay.classList.add("fade-out"); // Add the fade-out class
      setTimeout(function () {
        popupOverlay.style.display = "none";
        popupOverlay.classList.remove("fade-out"); // Remove the fade-out class
      }, 500); // Wait for the animation to complete before hiding the popup
    }
    
    
    // Show the popup when the page loads
    window.onload = function() {
      openPopup();
    };
    