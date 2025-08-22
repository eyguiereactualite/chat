// Récupération du template
const template = document.getElementById('chatlist_item').innerHTML;

// Fonction pour ajouter un message au log
function addMessage(from, color, message, badges="") {
    const log = document.getElementById('log');
    const div = document.createElement('div');
    div.innerHTML = template
        .replace('{from}', from)
        .replace('{color}', color)
        .replace('{messageId}', Date.now())
        .replace('{badges}', badges);

    const msg = div.firstElementChild;

    // Découpe le message en lignes
    const lines = message.split('\n');
    lines.forEach(line => {
        const lineDiv = document.createElement('div');
        lineDiv.textContent = line;
        lineDiv.style.display = "block"; // chaque ligne sous le pseudo
        msg.querySelector('.message').appendChild(lineDiv);
    });

    log.appendChild(msg);
    log.scrollTop = log.scrollHeight;
}

// Messages de test
addMessage("TEST_USER", "#00FF00", "Voici un message très long qui devrait s'afficher\nparfaitement sous le pseudo sans se décaler.\nChaque ligne reste bien alignée.");
addMessage("ALICE", "#FF00FF", "Un autre test\navec plusieurs retours à la ligne\npour vérifier le rendu exact.");
