 // Verifica se o usuário está autenticado
 const password = prompt("Digite a senha para acessar:");
 fetch("https://api.jsonbin.io/v3/b/67425dacacd3cb34a8ada81b", {
     headers: {
         "X-Master-Key": "$2a$10$G9vBMF6/d2pRjDPnBh/VgOD7klnG6/GnHUDMRCkE3.ezxvxtPNKky"
     }
 })
     .then(response => response.json())
     .then(data => {
         const storedPassword = data.record.password;

         if (password !== storedPassword) {
             alert("Acesso negado.");
             window.location.href = "index.html"; // Redireciona para outra página
         } else {
             alert("Bem-vindo à área administrativa.");
         }
     })
     .catch(error => {
         console.error("Erro ao validar a senha:", error);
         alert("Erro ao validar a senha.");
     });

 // Recupera os dados do Local Storage
 fetch("https://api.jsonbin.io/v3/b/67425c6dad19ca34f8cf2944", {
     headers: {
         "X-Master-Key": "$2a$10$G9vBMF6/d2pRjDPnBh/VgOD7klnG6/GnHUDMRCkE3.ezxvxtPNKky"
     }
 })
     .then(response => response.json())
     .then(data => {
         const storedData = data.record.padrinhos || [];
         const dataList = document.getElementById("data-list");

         if (storedData.length === 0) {
     dataList.innerHTML = "<tr><td colspan='4'>Nenhum dado armazenado.</td></tr>";
 } else {
     storedData.forEach((item, index) => {
         if (item.couple !== '') {
             dataList.innerHTML += `
                 <tr>
                     <td>${index + 1}</td>
                     <td>${item.couple}</td>
                     <td>${item.date}</td>
                     <td>${item.time}</td>
                     <td>${item.location}</td>
                 </tr>
             `;
         }
     });
 }
     })
     .catch(error => {
         console.error("Erro ao carregar os dados:", error);
         alert("Erro ao carregar os dados.");
     });