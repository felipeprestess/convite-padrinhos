const form = document.getElementById('appointment-form');
const loadingIndicator = document.getElementById("loading");
const submitButton = form.querySelector('button[type="submit"]'); // Seleciona o botão de submissão
const calendarInput = document.getElementById("calendar");
const timeInput = document.getElementById("time");

const showMoreButton = document.getElementById("show-more");
const detailsSection = document.getElementById("details");
const textoInicial = document.getElementById("initial-text");
showMoreButton.addEventListener("click", () => {
    detailsSection.classList.toggle("hidden");
    showMoreButton.style.display = "none";
    document.body.classList.add("expanded");
    textoInicial.remove();
});

const weddingDate = new Date("2025-09-13T00:00:00").getTime();

const maxDate = new Date(weddingDate);
maxDate.setDate(maxDate.getDate() - 30); // Subtrai 30 dias

function initializeCalendar(disabledDates) {
    flatpickr(calendarInput, {
        dateFormat: "Y-m-d",
        minDate: "today",
        maxDate: maxDate, 
        disable: disabledDates, 
        onChange: (selectedDates, dateStr) => {
            document.getElementById("date").value = dateStr;
        }
    });
}

timeInput.addEventListener("change", () => {
    const selectedTime = timeInput.value; // Hora selecionada no formato HH:mm
    const [hours, minutes] = selectedTime.split(":").map(Number);

    if (
        (hours > 21 || (hours === 21 && minutes > 30)) || // Após 21:30
        (hours < 9 || (hours === 9 && minutes < 30))     // Antes de 09:30
    ) {
        alert("Não foi dessa vez, champs. Escolha entre 09:30 e 21:30.");
        timeInput.value = ""; // Limpa o campo de hora
    }
});

// Buscar as datas já agendadas no JSONBin
async function fetchDisabledDates() {
    try {
        const response = await fetch("https://api.jsonbin.io/v3/b/67425c6dad19ca34f8cf2944", {
            method: "GET",
            headers: {
                "X-Master-Key": "$2a$10$G9vBMF6/d2pRjDPnBh/VgOD7klnG6/GnHUDMRCkE3.ezxvxtPNKky"
            }
        });

        if (!response.ok) {
            throw new Error("Erro ao buscar as datas existentes no JSONBin");
        }

        const binData = await response.json();
        const storedDates = binData.record.padrinhos.map(p => p.date); // Extrai as datas já agendadas
        initializeCalendar(storedDates); // Inicializa o calendário com as datas bloqueadas
    } catch (error) {
        console.error("Erro ao carregar as datas:", error);
        alert("Erro ao carregar as datas disponíveis.");
    }
}

// Chamar a função para carregar o calendário
fetchDisabledDates();


function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timer").textContent = `${days} dias, ${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById("timer").textContent = "Chegou o grande dia!";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Envio do formulário
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Mostrar o spinner
    loadingIndicator.classList.remove("hidden-load");
    submitButton.disabled = true; // Desativa o botão para evitar múltiplos envios
    submitButton.textContent = "Enviando..."; // Muda o texto do botão para feedback visual

    const padrinhoData = {
        couple: document.getElementById("couple").value || "Casal de padrinhos",
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        location: document.getElementById("location").value,
    };

    try {
        // Buscar os dados existentes no JSONBin
        const getResponse = await fetch("https://api.jsonbin.io/v3/b/67425c6dad19ca34f8cf2944", {
            method: "GET",
            headers: {
                "X-Master-Key": "$2a$10$G9vBMF6/d2pRjDPnBh/VgOD7klnG6/GnHUDMRCkE3.ezxvxtPNKky"
            }
        });

        if (!getResponse.ok) {
            throw new Error("Erro ao buscar os dados existentes no JSONBin");
        }

        const binData = await getResponse.json();
        const currentPadrinhos = binData.record.padrinhos || [];

        // Adicionar o novo dado ao array existente
        currentPadrinhos.push(padrinhoData);

        // Atualizar o bin com os dados
        const updateResponse = await fetch("https://api.jsonbin.io/v3/b/67425c6dad19ca34f8cf2944", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-Master-Key": "$2a$10$G9vBMF6/d2pRjDPnBh/VgOD7klnG6/GnHUDMRCkE3.ezxvxtPNKky"
            },
            body: JSON.stringify({ padrinhos: currentPadrinhos })
        });

        if (updateResponse.ok) {
            alert("Dados enviados com sucesso!");
            submitButton.textContent = "Enviado";
            submitButton.remove();
        } else {
            throw new Error("Erro ao atualizar os dados no JSONBin");
        }
    } catch (error) {
        console.error("Erro:", error);
        alert("Erro ao enviar os dados. Consulte o console para mais informações.");
        submitButton.disabled = false; 
        submitButton.textContent = "É isso, bore"; 
    } finally {
        // Esconder o spinner de carregamento
        loadingIndicator.classList.add("hidden-load");
    }

    form.reset();
});