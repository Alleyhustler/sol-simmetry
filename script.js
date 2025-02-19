// Ensure the audio plays automatically (some browsers block autoplay)
document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('background-sound');
    audio.play().catch(error => {
      console.log("Autoplay was blocked. Please interact with the page to play the sound.");
    });
  
    // Play audio on user interaction
    document.body.addEventListener('click', function () {
      audio.play();
    });
  });