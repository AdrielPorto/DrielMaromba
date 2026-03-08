# DrielMaromba API

API REST em Node.js com Express e MongoDB para gerenciamento de produtos.

## Tecnologias

- **Node.js** + **Express** — servidor e rotas
- **MongoDB** + **Mongoose** — banco de dados
- **dotenv** — variáveis de ambiente

## Estrutura do projeto

```
src/
├── config/           # Configurações (ex.: conexão com o banco)
├── models/           # Schemas Mongoose
├── repositories/     # Acesso a dados
├── controllers/      # Lógica das rotas e respostas HTTP
├── routes/           # Definição das rotas por domínio
├── app.js            # Configuração do Express
└── index.js          # Entrada da aplicação
```

## Pré-requisitos

- Node.js 14+
- MongoDB (local ou [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

## Instalação

```bash
# Clonar e entrar na pasta do projeto
cd DrielMaromba

# Instalar dependências
npm install

# Copiar variáveis de ambiente e editar com seus dados
cp .env.example .env
```

Edite o `.env` e defina pelo menos a URI do MongoDB:

```env
MONGODB_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/DrielMaromba?retryWrites=true&w=majority
PORT=3000
```

## Como rodar

```bash
# Desenvolvimento (com nodemon)
npm run dev

# Produção
npm start
```

O servidor sobe em `http://localhost:3000` (ou na porta definida em `PORT`).

## API — Produtos

| Método | Endpoint            | Descrição           |
|--------|---------------------|---------------------|
| GET    | `/produto`          | Lista todos         |
| GET    | `/produto/:id`      | Busca por ID        |
| POST   | `/produto`          | Cria produto        |
| PUT    | `/produto/:id`      | Atualiza produto    |
| DELETE | `/produto/:id`      | Remove produto      |

### Exemplo de corpo (POST/PUT)

```json
{
  "nome": "Whey Protein",
  "marca": "Growth",
  "categoria": "Proteína",
  "descricao": "Suplemento proteico",
  "valor": 129.90
}
```

## Docker

```bash
# Build e execução com Docker Compose
docker-compose up --build
```

O `docker-compose` sobe apenas a API. É necessário ter um MongoDB acessível (local ou Atlas) e configurar `MONGODB_URI` no `.env` ou no ambiente do container.

## Licença

ISC
