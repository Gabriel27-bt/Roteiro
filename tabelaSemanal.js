document.addEventListener("DOMContentLoaded", function() {
    const diasSemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"];
    const horarios = ["5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"];

    const table = document.getElementById("horarios");

    // Adicionando os horários na primeira coluna
    for (let i = 0; i < horarios.length; i++) {
        const row = table.insertRow();
        const cellHora = row.insertCell(0);
        cellHora.textContent = horarios[i];

        for (let j = 0; j < diasSemana.length; j++) {
            const cell = row.insertCell(j + 1);
            cell.contentEditable = true; // Permite editar o conteúdo da célula
            cell.textContent = ""; // Inicia com conteúdo vazio
        }
    }

    // Adicionando os dias da semana na primeira linha
    const headerRow = table.insertRow(0);
    headerRow.insertCell(0); // Célula vazia na primeira coluna
    for (let i = 0; i < diasSemana.length; i++) {
        const cellDia = headerRow.insertCell(i + 1);
        cellDia.textContent = diasSemana[i];
    }
});
