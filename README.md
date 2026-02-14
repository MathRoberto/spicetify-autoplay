# Autoplay for Spicetify

A simple, lightweight extension for [Spicetify](https://github.com/spicetify/spicetify-cli) that automatically resumes music playback when you open Spotify.

No more silence when launching the app!

## 🚀 Features

- **Instant Resume:** Automatically plays the last track or context upon launch.
- **Smart Check:** Only attempts to play if the player is currently paused to avoid conflicts.
- **Lightweight:** Minimal code, runs once at startup.

🛠 How it works
The script waits for the Spicetify Player API to initialize, waits a safe 1-second buffer for Spotify to load its internal state, and then sends a play command if the player is paused.

## 📦 Installation

### Manual Installation

1. Download `autoplay.js` from this repository.
2. Place it in your Spicetify extensions folder:
   - **Windows:** `%appdata%\spicetify\Extensions\`
   - **Linux/MacOS:** `~/.config/spicetify/Extensions/`
3. Open your terminal and run the following commands to register and apply the extension:

```bash
spicetify config extensions autoplay.js
spicetify apply

