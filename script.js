const form = document.getElementById('appointment-form');
const loadingIndicator = document.getElementById("loading");
const submitButton = form.querySelector('button[type="submit"]'); // Seleciona o botão de submissão

// Exibir mais detalhes ao clicar no botão
const showMoreButton = document.getElementById("show-more");
const detailsSection = document.getElementById("details");
const textoInicial = document.getElementById("initial-text");
showMoreButton.addEventListener("click", () => {
    detailsSection.classList.toggle("hidden");
    showMoreButton.style.display = "none";
    document.body.classList.add("expanded");
    textoInicial.remove();
});

// Configuração do contador regressivo
const weddingDate = new Date("2025-09-13T00:00:00").getTime();

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
