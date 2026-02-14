(async function autoplay() {
    // Espera a API do Spicetify carregar o Player
    while (!Spicetify.Player) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Espera um pouco para garantir que o Spotify carregou o estado da última música
    setTimeout(() => {
        // Só dá play se estiver pausado
        if (!Spicetify.Player.isPlaying()) {
            Spicetify.Player.play();
        }
    }, 1000); // 1 segundo de delay é o ponto ideal
})();
