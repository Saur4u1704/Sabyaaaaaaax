const messages = [
  "Hi Sabya I know today is your special day your birthday.",
  "Bhut saari baatein hai kehne ko toh.",
  "pr shuru kaha sai kru vo nhii pta.",
  "Mai thoda introvert hu mujko nhii pta ki like kese kisi ko special feel krvate hai ya kese nhii.",
  "But you are my one of the special friend forever...",
  "I think best freind ❤️?",
  "Aur humne kaafi enjoy kra hai like chahe vo cllg ho ya discord ho ya google meet ho..",
  "Aur ha Pubg toh bhul hi gye jaha sai humari bonding hona start huyi as a random mai aaya tha ashish nai mujko add kra tha ek din ",
  "vo ek din aur aaj ka din we still together",
  "And i still remember jb humara first time milne ka plan hua tha tera birthday hi tha uss din aur mai aa nhii paya tha uske liye sorry vo lockdown kai time ki baat hai",
  "Fir hum college mai mile thai we enjoyed alot and then hum bahar mile thai.. like mai virtual kaafi extrovert hu but",
  "In real life utna hi introvert hu. Aur hum kbhi itne mile bhii nhiii hai means itni samne sai baatein nhi kri haiii..",
  "Aur yeh mai esliye itna likhra hu ki like i never ever want to lose you in my life..",
  "Vrna dost to hazaar hai pr hazaar mai tu ek hai ❤️💕",
  "Aur mai kaafi glad feel krta hu ki you are my friend babu lol",
  "jbse college end hua hai tbse apna intraction bhi kam hogya hai",
  "Like tu bhi busy sb busy hogye hai",
  "but still.. baat kam huyi haiii pr apni dost nhiii",
  "and I hope yeh dosti kbhi khatam na ho...",
  "Aur agr tujko meri kbhi koi baat buri lgi ho toh genuienly sorry uske liye",
  "Mai janta hu jitna likhu utna kam hai tere liye",
  "But shyd itna kaafi hai like mai samne yeh kbhi na bol paau but",
  "Yaha mai jarur bol skta hu..",
  "And.....",
  "Happiest birthday to best fraaaaaaaaaaaannnnnnnnnnnnnnnnnnnnnndddddddddddddddddddddddddddddddd ❤️💕❤️💕❤️💕❤️💕❤️💕❤️💕"
];

const messagesContainer = document.getElementById('messages');
const nextButton = document.getElementById('nextButton');
const sprinklesContainer = document.getElementById('sprinkles');
const backgroundMusic = document.getElementById('backgroundMusic');

// Function to create sprinkles
function createSprinkles() {
  for (let i = 0; i < 100; i++) { // Create 100 sprinkles
    const sprinkle = document.createElement('div');
    sprinkle.classList.add('sprinkle');
    sprinkle.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    sprinkle.style.animationDelay = `${Math.random() * 5}s`; // Random delay
    sprinkle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`; // Random color
    sprinklesContainer.appendChild(sprinkle);
  }
}

// Initialize sprinkles when the page loads
createSprinkles();

// Function to display messages line by line
function displayMessages(index) {
  if (index < messages.length) {
    const p = document.createElement('p');
    p.textContent = messages[index];
    messagesContainer.appendChild(p);

    // Auto-scroll to the bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    setTimeout(() => {
      displayMessages(index + 1);
    }, 3000); // Adjust delay between lines (1 second)
  } else {
    // Show the "Go to Next Page" button after all messages are displayed
    nextButton.classList.remove('hidden');
  }
}

// Start displaying messages
displayMessages(0);

// Redirect to the next page when the button is clicked
nextButton.addEventListener('click', () => {
  window.location.href = 'photos.html'; // Change to the next page
});

// Autoplay music (with muted workaround)
document.addEventListener('DOMContentLoaded', () => {
  // Unmute and play the audio
  backgroundMusic.muted = false;
  backgroundMusic.play().catch((error) => {
    console.error('Autoplay failed:', error);
    // Fallback: Prompt the user to interact with the page
    alert('Birthday gurl screen pr click krna Something will be played for you');
  });
});

// Fallback: Play audio on user interaction
document.addEventListener('click', () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
  }
});