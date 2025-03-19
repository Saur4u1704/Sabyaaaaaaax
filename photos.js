const images = [
  "assests/images/Sabya.png",
  "assests/images/Sabya1.png",
  "assests/images/Sabya2.png",
  "assests/images/Sabya3.jpeg",
  "assests/images/Sabya12.jpeg",
  "assests/images/Sabya11.jpeg",
  "assests/images/Sabya7.jpeg",
  "assests/images/Sabya6.jpeg",
  "assests/images/Sabya8.jpeg",
  "assests/images/Sabya9.jpeg",
  "assests/images/Sabya10.jpeg",
  "assests/images/Sabya4.jpeg",
  "assests/images/Sabya5.jpeg",
  "assests/images/Sabya13.png",
  "assests/images/Sabya14.png",
  "assests/images/Sabya15.png",
  "assests/images/Sabya17.png",
  "assests/images/Sabya18.png",
  "assests/images/Sabya19.png",
  "assests/images/Sabya20.png",
  "assests/images/Sabya21.png"
];

const imageGrid = document.getElementById('imageGrid');
const nextButton = document.getElementById('nextButton');
const backgroundMusic = document.getElementById('backgroundMusic');

// Function to display images one by one
function displayImages(index) {
  if (index < images.length) {
    const img = document.createElement('img');
    img.src = images[index];
    imageGrid.appendChild(img);

    // Fade in the image
    setTimeout(() => {
      img.style.opacity = 1;
    }, 100);

    // Display the next image after a delay
    setTimeout(() => {
      displayImages(index + 1);
    }, 3000); // Adjust delay between images (1 second)
  } else {
    // Show the "Go to Next Page" button after all images are displayed
    nextButton.classList.remove('hidden');
  }
}

// Start displaying images
displayImages(0);

// Redirect to the next page when the button is clicked
nextButton.addEventListener('click', () => {
  window.location.href = 'birthday.html';
});
// Autoplay music (with muted workaround)
document.addEventListener('DOMContentLoaded', () => {
  // Unmute and play the audio
  backgroundMusic.muted = false;
  backgroundMusic.play().catch((error) => {
    console.error('Autoplay failed:', error);
    // Fallback: Prompt the user to interact with the page
    alert('Babu suno screen pr khi bhi click kro');
  });
});

// Fallback: Play audio on user interaction
document.addEventListener('click', () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
  }
});