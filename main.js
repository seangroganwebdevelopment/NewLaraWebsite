// HERO SECTION - Real time writing 

function typeEffect() {
    const titleElement = document.getElementById('LARA');
    const titleText = "Lara Grogan";  // Replace with your desired title text
    const typingSpeed = 200;  // Adjust typing speed (in milliseconds)
  
    let i = 0;
    const timer = setInterval(function() {
      titleElement.textContent += titleText.charAt(i);
      i++;
      if (i === titleText.length) {
        clearInterval(timer);
      }
    }, typingSpeed);
  }
  
  // Call the function to start the typing effect
  typeEffect();
  


