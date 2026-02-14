(async function autoplay() {
    // Wait for the Spicetify Player API to load completely
    while (!Spicetify.Player) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Wait a moment to ensure Spotify has loaded the last track state/context
    setTimeout(() => {
        // Only attempt to play if the player is currently paused
        if (!Spicetify.Player.isPlaying()) {
            Spicetify.Player.play();
        }
    }, 1000); // 1000ms delay ensures the UI is ready
})();
