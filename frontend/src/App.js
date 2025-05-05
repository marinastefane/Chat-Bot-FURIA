import React, { useState, useEffect, useRef } from "react";

export default function App() {
  // Estado das mensagens do chat
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: " 🐾 Salve, torcedor da FURIA! Em que posso te ajudar?",
    },
  ]);

  // Estado do input do usuário
  const [input, setInput] = useState("");

  // Estado de exibição do chat visivel ou nao
  const [chatVisible, setChatVisible] = useState(false);

  // rolagem automática
  const chatEndRef = useRef(null);

  // Modo zueira
  const [modoZueira, setModoZueira] = useState(false);

  //digitando...
  const [botTyping, setBotTyping] = useState(false);

  // Rola automaticamente para a última mensagem sempre que a lista mudar
  useEffect(() => {
    if (chatVisible) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, chatVisible]);

  // Função para enviar a mensagem do usuário
  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;

    //adiciona as mensagens do usuario na interface
    setMessages([...messages, { from: "user", text: userMessage }]);
    setInput("");

    setBotTyping(true);

    //backend
    try {
      const response = await fetch("https://chat-bot-furia-backend.onrender.com/respostas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage, modoZueira: modoZueira }),
      });

      const data = await response.json();

      setTimeout(() => {
        setMessages((prev) => [...prev, { from: "bot", text: data.resposta }]);
        setBotTyping(false);
      }, 1000);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Erro ao se conectar com o servidor." },
      ]);
      setBotTyping(false);
    }
  };

  const handleModoZueira = () => {
    setModoZueira(!modoZueira);
    if (!modoZueira) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          from: "bot",
          text: `Modo Zueira ${
            modoZueira ? "desativado" : "ativado"
          }! Agora minhas respostas ficam mais descontraídas. Prepare-se para a resenha! 🐾`,
        },
      ]);
    }
  };

  return (
    <div className="app-container">
      <img src="/FuriaLogo.png" alt="Logo da FURIA" className="furia-logo" />

      <div className="furia-title">
        Fala, FURIA!
        <span role="img" aria-label="fogo">
          🔥
        </span>
      </div>

      <div className="furia-subtitle">
        Seu parceiro de torcida, 24h no chat.
        <br />
        Resenha, estatísticas e paixão por CS:GO, tudo num só lugar.
      </div>
      <div className="button-container">
        <button
          className="furia-button"
          onClick={() => setChatVisible(!chatVisible)}
        >
          {chatVisible ? "Fechar Chat" : "Fale com o Bot"}
        </button>

        {chatVisible && (
          <button className="furia-button" onClick={handleModoZueira}>
            {modoZueira ? "Desativar Modo Zueira" : "Ativar Modo Zueira"}
          </button>
        )}
      </div>

      {/* modo de perguntas frequentes */}
      {chatVisible && (
        <>
          <div className="furia-subtitle">Perguntas Frequentes:</div>
          <div className="suggestions-container">
            {[
              ["Vai ter jogo hoje?", "Qual a LINE-UP?"],
              ["Como foi o último jogo?", "Qual a história da FURIA?"],
            ].map((coluna, colIndex) => (
              <div key={colIndex} className="suggestion-column">
                {coluna.map((pergunta, index) => (
                  <div
                    key={index}
                    className="suggestion-item"
                    onClick={() => setInput(pergunta)}
                  >
                    {pergunta}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      )}

      {chatVisible && (
        <div className="chat-container">
          {/* Lista de mensagens do chat */}
          {messages.map((msg, idx) => (
            <div
              key={`${msg.from}-${idx}`} // chave composta para evitar bugs
              className={msg.from === "bot" ? "bot-msg" : "user-msg"}
            >
              {msg.text}
            </div>
          ))}

          {botTyping && (
            <div className="bot-msg">Panterinha está digitando...</div>
          )}

          {/* Ponto final para rolar automaticamente */}
          <div ref={chatEndRef} />

          <form className="chat-form" onSubmit={handleSend}>
            <input
              className="chat-input"
              placeholder="Digite uma mensagem..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button type="submit" className="chat-send">
              Enviar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
