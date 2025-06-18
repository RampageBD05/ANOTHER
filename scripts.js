document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".music-image");
  let currentAudio = null;

  images.forEach(img => {
    img.addEventListener("click", () => {
      const audioSrc = img.getAttribute("data-audio");

      // If audio is already playing, stop it
      if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }

      // Create new audio element and play
      currentAudio = new Audio(audioSrc);
      currentAudio.play();
    });
  });
});