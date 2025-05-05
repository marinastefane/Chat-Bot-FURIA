# FURIA ChatBot

Esse é um projeto de chatbot desenvolvido para interagir de maneira divertida e informativa sobre a organização de eSports **FURIA**. O bot fornece informações sobre a história da FURIA, seus jogadores, torneios futuros e mais, além de contar com um modo zueira, que oferece respostas descontraídas e engraçadas.

O sistema é composto por uma API backend desenvolvida com **Node.js e Express** e um frontend desenvolvido com **React.js.**

## Pré-requisitos

É necessário garantir que as seguintes ferramentas estejam instaladas:

- [Node.js](https://nodejs.org/)
- [NPM (Node Package Manager)](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- **Navegador:** Testado no navegador [Brave](https://brave.com/pt-br/)
  - Não testado em outros navegadores, embora o funcionamento seja esperado.

## Funcionalidades

- **Respostas normais:** O bot pode fornecer respostas detalhadas sobre a FURIA, como:
    - Próximo jogo
    - LINE-UP atual
    - História da FURIA
    - Informações sobre o ranking mundial
    - E muito mais!
- **Modo Zueira:** Quando ativado, o bot oferece respostas descontraídas e engraçadas, com um toque de humor e irreverência.
- **Comunicação Frontend-Backend:** A comunicação entre o frontend e o backend é feita através de requisições **POST** para a rota ` /respostas`, onde o bot analisa a pergunta e responde com base em um conjunto de respostas predefinidas..


## Tecnologias Usadas

### Frontend

- **React.js:** Para construção da interface do usúario.
- **CSS:** Para estilização da interface.
- **Axios:** Para fazer requisições HTTP ao backend.

### Backend

- **Node.js:** Ambiente de execução JavaScript
- **Express:** Framework para a criação da API RESTful.
- **CORS:** Middleware para permitir a comunicação entre o frontend e o backend (diferentes origens).

## Como rodar o projeto

### 1. Clonar o repositório

Primeiro, clone este repositório em sua máquina:

```bash
git clone https://github.com/seu-usuario/furia-chatbot.git
cd furia-chatbot
```

### 2. Configuração do Backend (API)

1. Navegue até a pasta do backend:

```bash
cd backend
```

2. Instale as dependências do backend:

```bash
npm install
```

3. Inicie o servidor do backend:

```bash
node server.js
```

O backend estará rodando em `http://localhost:5000`

### 3. Configuração do Frontend

(Use um segundo terminal)

1. No segundo terminal, navegue até a pasta frontend:

```bash
cd frontend
```

2. Instale as dependências do frontend:

```bash
npm install
```

3. Inicie o servidor do frontend:

```bash
npm start
```

O frontend estará rodando em `http://localhost:3000`

## Endpoints da API

### `POST /respostas`

**Descrição:** Recebe uma mensagem do usuário e retorna uma resposta com base nas respostas predefinidas ou no modo zueira.

**Requisição:**

```json
{
  "message": "qual a lineup da FURIA?",
  "modoZueira": true
}
```

**Resposta:**

```json
{
  "resposta": "PGL Astana, meu querido! Começa sábado que vem lá no Cazaquistão! Já tô preparando a playlist de músicas pra não dormir durante as partidas de madrugada! Café e FURIA, a dupla que não falha! ☕🔥"
}
```

## Estrutura do Projeto

- `/frontend`: Contém o codigo do frontend (React.js)
  - `src/App.js`: Componente principal do frontend, onde ocorre a interação com o backend e a renderização da interface.
  - `src/index.css`: Arquivo CSS para a estilização do frontend.
- `backend`: Contém o código do backend (Node.js e Express).
  - `server.js`: Arquivo principal do servidor, onde são configuradas as rotas e lógica do backend.
  - `respostas.json`: Contém as respostas predefinidas do bot (normal e modo zueira).

## Deploy
- **Backend**: O backend está hospedado na plataforma **Render**. O servidor é automaticamente iniciado e pode ser acessado através da URL:
[FURIA ChatBot Backend](https://chat-bot-furia-backend.onrender.com/)

- **Frontend**: O frontend do projeto é hospedado na plataforma **Vercel**. [FURIA ChatBot Frontend](https://chat-bot-furia-j2ztfdkwn-marinastefanes-projects.vercel.app/).

## Informações Adicionais
- **Contato:** Para quaisquer dúvidas, me contate pelo email [marinadelfino03@gmail.com](mailto:marinadelfino03@gmail.com)

## Agradecimentos
- Gostaria de expressar minha gratidão pela oportunidade de demonstrar meus conhecimentos. Espero que o projeto atenda às expectativas! ;)
