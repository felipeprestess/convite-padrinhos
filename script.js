// URL da página de agendamento (ajuste para o link que quiser)
const url = "https://felipeprestess.github.io/convite-padrinhos/agendamento";

// Geração do QRCode
const qrcodeContainer = document.getElementById("qrcode");
new QRCode(qrcodeContainer, {
    text: url,
    width: 128,
    height: 128,
    colorDark: "#333333",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
});
