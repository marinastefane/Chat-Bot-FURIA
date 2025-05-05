const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const normalize = (text) => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .replace(/[^\w\s]/gi, "") // Remove pontuação
    .toLowerCase()
    .trim();
};

const respostaFallback = () => {
  const respostas = [
    "Essa me pegou de surpresa! 😅",
    "Boa pergunta! Vou pesquisar com o Panterinha.",
    "Não sei agora, mas logo te respondo como um verdadeiro furioso!",
  ];
  return respostas[Math.floor(Math.random() * respostas.length)];
};

// Rota para receber mensagens do usuário
app.post("/responder", (req, res) => {
  const userMessage = req.body.message.toLowerCase();
  const modoZueira = req.body.modoZueira;

  fs.readFile("respostas.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ resposta: "Erro interno no servidor." });
    }

    const respostas = JSON.parse(data);
    const normalizedMessage = normalize(userMessage);

    // Se houver modo zueira e mensagem mapeada
    if (modoZueira && respostas.zueira[normalizedMessage]) {
      return res.json({ resposta: respostas.zueira[normalizedMessage] });
    }

    const respostaNormal = respostas.normal[normalizedMessage.toLowerCase()];
    const resposta = respostaNormal || respostaFallback();

    res.json({ resposta });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
