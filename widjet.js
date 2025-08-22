// URL de ton widget Streamlabs
const SOCKET_URL = "wss://sockets.streamlabs.com/socket.io/?EIO=3&transport=websocket";

// Récupération du template
const template = document.getElementById('chatlist_item').innerHTML;

// Fonction pour ajouter un message au log
function addMessage(from, color, message, badges="") {
    const log = document.getElementById('log');
    
    // Crée un élément div
    const div = document.createElement('div');
    div.innerHTML = template
        .replace('{from}', from)
        .replace('{color}', color)
        .replace('{messageId}', Date.now())
        .replace('{message}', message)
        .replace('{badges}', badges);

    // Ajoute le message
    const msg = div.firstElementChild;
    log.appendChild(msg);
    
    // Scroll vers le bas
    log.scrollTop = log.scrollHeight;
}

// Exemple de test sans API (à supprimer ensuite)
addMessage("TEST_USER", "#00FF00", "Voici un message très très long qui devrait s'afficher parfaitement sous le pseudo sans se décaler. Regardez comment chaque ligne se place correctement, c'est exactement ce que vous vouliez !");

// Pour récupérer les messages réels via l'API Streamlabs, tu peux utiliser le WebSocket officiel ou l'API REST
// https://dev.streamlabs.com/docs
