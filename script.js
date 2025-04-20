document.addEventListener('DOMContentLoaded', function () {
  const viewProfileBtn = document.getElementById('viewProfileBtn');
  const closePopupBtn = document.getElementById('closePopupBtn');
  const popupOverlay = document.getElementById('popupOverlay');
  const loadingScreen = document.getElementById('loadingScreen');
  const profileContent = document.getElementById('profileContent');
  const loadingBar = document.getElementById('loadingBar');
  const song = document.getElementById('song');

  // Play sound and show loading screen when view profile is clicked
  viewProfileBtn.addEventListener('click', function () {
    popupOverlay.classList.add('active');
    loadingScreen.classList.remove('hidden');
    profileContent.classList.add('hidden');

    // Play the music
    song.volume = 0.5;
     song.play().catch(() => {
      console.log("Autoplay diblokir, akan dimulai saat interaksi.");
    });

    // Start loading animation
    loadingBar.classList.add('active');

    // After loading completes, show profile content
    setTimeout(function () {
      loadingScreen.classList.add('hidden');
      profileContent.classList.remove('hidden');
    }, 3000);
  });

  // Close popup when close button is clicked (keep music playing)
  closePopupBtn.addEventListener('click', function () {
    popupOverlay.classList.remove('active');
    loadingBar.classList.remove('active');
  });

  // Close popup when clicking outside content
  popupOverlay.addEventListener('click', function (e) {
    if (e.target === popupOverlay) {
      popupOverlay.classList.remove('active');
      song.pause();
       song.currentTime = 0;
        loadingBar.classList.remove('active');
    }
  });

  // Button click sound effect
  const buttons = document.querySelectorAll('button, a');
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const clickSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-quick-jump-arcade-game-239.mp3');
      clickSound.volume = 0.3;
      clickSound.play();
    });
  });
});
