// Nome do usuário e empresa
const userName = "Carlos Gabriel";
const companyName = "PontoCheck";

// Alterna entre ponto de entrada e saída
let isEntry = true;
let history = [];

// Atualiza o horário em tempo real com horas, minutos e segundos
function updateTime() {
    const timeDisplay = document.getElementById("timeDisplay");
    const now = new Date();
    timeDisplay.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

setInterval(updateTime, 1000);

function marcarPonto() {
    const statusMsg = document.getElementById("statusMsg");
    const now = new Date();
    const timeEntry = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    // Define o tipo de ponto (Entrada/Saída)
    const tipoPonto = isEntry ? "Entrada" : "Saída";
    history.push({ user: userName, company: companyName, tipo: tipoPonto, horario: timeEntry });
    isEntry = !isEntry; // Alterna o próximo ponto entre entrada e saída

    atualizarHistorico();

    // Animação rápida ao atualizar a mensagem de status
    statusMsg.textContent = `${tipoPonto} registrada às ${timeEntry}.`;
    statusMsg.classList.add('status-update');
    setTimeout(() => statusMsg.classList.remove('status-update'), 1000);
}

function atualizarHistorico() {
    const historyList = document.getElementById("historyList");
    historyList.innerHTML = "";

    // Mostra apenas os últimos 5 registros
    history.slice(-5).forEach(entry => {
        const listItem = document.createElement("li");
        listItem.classList.add(entry.tipo.toLowerCase()); // Adiciona classe 'entrada' ou 'saida'

        listItem.innerHTML = `
            <strong>Usuário:</strong><span>${entry.user}</span><br>
            <strong>Empresa:</strong><span>${entry.company}</span><br>
            <strong>Tipo:</strong><span>${entry.tipo}</span><br>
            <strong>Horário:</strong><span>${entry.horario}</span>
        `;
        historyList.appendChild(listItem);
    });
}

// Alterna o tema escuro
function toggleTheme() {
    document.body.classList.toggle("dark-theme");
}