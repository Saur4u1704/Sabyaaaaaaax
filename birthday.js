// Replace [Name] with the loved one's name
document.getElementById('name').textContent = 'Sabya';

// Special Button Interaction
const specialButton = document.getElementById('specialButton');
const specialMessage = document.getElementById('specialMessage');

specialButton.addEventListener('click', () => {
  specialMessage.classList.add('show');
  specialButton.style.display = 'none'; // Hide the button after click
});

// Background Music
const backgroundMusic = document.getElementById('backgroundMusic');

document.addEventListener('DOMContentLoaded', () => {
    // Unmute and play the audio
    backgroundMusic.muted = false;
    backgroundMusic.play().catch((error) => {
      console.error('Autoplay failed:', error);
      // Fallback: Prompt the user to interact with the page
      alert('Babu suno screen pr khi bhi click kro');
    });
  });

// Play music on user interaction
document.addEventListener('click', () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
  }
});