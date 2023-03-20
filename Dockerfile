# Use a imagem do Node.js como base
FROM node:14-alpine

# Cria e define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos do seu projeto para dentro do contêiner
COPY package*.json ./
COPY src ./src

# Instala as dependências do seu projeto
RUN npm install

# Expõe a porta que a aplicação está ouvindo
EXPOSE 3000

# Inicia a aplicação
CMD [ "npm", "run", "dev" ]
