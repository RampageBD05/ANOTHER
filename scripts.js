document.querySelectorAll('.music-image').forEach(img => {
  img.addEventListener('click', () => {
    const audioId = img.getAttribute('data-audio');
    const audioElement = document.getElementById(audioId);

    // Pause any other playing audio
    document.querySelectorAll('audio').forEach(audio => {
      if (audio !== audioElement) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    // Play the clicked image's audio
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
      audioElement.currentTime = 0;
    }
  });
});
