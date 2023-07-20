// HERO SECTION - Real time writing

function typeEffect() {
  const titleElement = document.getElementById('LARA');
  const titleText = "Lara Grogan"; // Replace with your desired title text
  const typingSpeed = 100; // Adjust typing speed (in milliseconds)

  let i = 0;
  const timer = setInterval(function () {
    const character = titleText.charAt(i);
    const span = document.createElement('span');
    span.textContent = character;

    if (character === 'L' || character === 'G') {
      span.classList.add('large');
    }

    titleElement.appendChild(span);

    i++;
    if (i === titleText.length) {
      clearInterval(timer);
    }
  }, typingSpeed);
}

// Delay the start of typing effect for 3 seconds
setTimeout(function () {
  // Call the function to start the typing effect
  typeEffect();
}, 10);




