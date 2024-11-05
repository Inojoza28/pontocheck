// Função para atualizar o horário atual na tela, incluindo segundos
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Inclui os segundos
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('current-time').textContent = timeString;
}


// Função para simular autenticação de ponto
function authenticate(method) {
    const message = method === 'digital'
        ? 'Autenticando por Reconhecimento Digital...'
        : 'Autenticando por Reconhecimento Facial...';
    alert(message); // Simulação de autenticação
}

// Função para inicializar o mapa com Leaflet
function initMap() {
    // Define as coordenadas para Recife
    const recifeLocation = [-8.0476, -34.8770];
    // Inicializa o mapa
    const map = L.map('map').setView(recifeLocation, 15);
    // Adiciona o tile layer do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    // Adiciona um marcador na localização de Recife
    L.marker(recifeLocation).addTo(map)
        .bindPopup("Localização da Empresa")
        .openPopup();
}

// Chama a função para inicializar o mapa
document.addEventListener("DOMContentLoaded", initMap);

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);

// Inicializa o relógio ao carregar a página
updateClock();


function authenticate(method) {
    // Exibe o modal
    const modal = document.getElementById("modal");
    const loader = document.getElementById("loader");
    const successIcon = document.getElementById("success-icon");
    const message = document.getElementById("modal-message");

    modal.style.display = "flex"; // Mostra o modal
    loader.style.display = "block"; // Exibe o loader
    successIcon.style.display = "none"; // Oculta o ícone de sucesso
    message.textContent = "Processando...";

    // Simula o tempo de processamento (3 segundos)
    setTimeout(() => {
        loader.style.display = "none"; // Oculta o loader
        successIcon.style.display = "block"; // Exibe o ícone de sucesso
        message.textContent = "Ponto concluído com sucesso!";
        
        // Oculta o modal após mais 2 segundos
        setTimeout(() => {
            modal.style.display = "none";
        }, 2000); // Tempo para o usuário ler a mensagem (2 segundos)
    }, 3000); // Tempo de "processamento" (3 segundos)
}
