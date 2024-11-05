// Dados fictícios para o relatório
const reportData = [
    { date: '2024-11-01', entry: '08:00', exit: '17:00', hoursWorked: 8, extraHours: 0, notes: '' },
    { date: '2024-11-02', entry: '08:15', exit: '17:30', hoursWorked: 8, extraHours: 0.5, notes: 'Atraso' },
    // Adicione mais dados aqui
];

// Popula a tabela com os dados
const reportBody = document.getElementById('report-body');
reportData.forEach((record) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${record.date}</td>
        <td>${record.entry}</td>
        <td>${record.exit}</td>
        <td>${record.hoursWorked}h</td>
        <td>${record.extraHours}h</td>
        <td>${record.notes}</td>
    `;
    reportBody.appendChild(row);
});

// Gráfico usando Chart.js
const ctx = document.getElementById('workHoursChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: reportData.map(record => record.date),
        datasets: [{
            label: 'Horas Trabalhadas',
            data: reportData.map(record => record.hoursWorked),
            backgroundColor: 'rgba(0, 123, 255, 0.5)',
        }, {
            label: 'Horas Extras',
            data: reportData.map(record => record.extraHours),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            tooltip: { enabled: true },
        },
        scales: {
            y: { beginAtZero: true }
        }
    }
});