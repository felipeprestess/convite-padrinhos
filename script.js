const form = document.getElementById('appointment-form');

// Exibir mais detalhes ao clicar no botão
const showMoreButton = document.getElementById("show-more");
const detailsSection = document.getElementById("details");

showMoreButton.addEventListener("click", () => {
    detailsSection.classList.toggle("hidden"); // Mostra ou esconde os detalhes
    showMoreButton.style.display = "none"; // Esconde o botão

    // Ajusta o alinhamento vertical do body
    document.body.classList.add("expanded");
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

// Atualiza o contador a cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();
