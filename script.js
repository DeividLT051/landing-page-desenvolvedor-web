const btnContato = document.getElementById("btnContato");
const contatoSection = document.getElementById("contato");
const form = document.getElementById("formContato");
const statusMsg = document.getElementById("status");

btnContato.addEventListener("click", () => {
  contatoSection.scrollIntoView({ behavior: "smooth" });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !mensagem) {
    statusMsg.style.color = "red";
    statusMsg.textContent = "Preencha todos os campos.";
    return;
  }

  statusMsg.style.color = "green";
  statusMsg.textContent = "Mensagem enviada com sucesso!";

  form.reset();
});
