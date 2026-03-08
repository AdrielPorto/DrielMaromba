require('dotenv').config();
const app = require('./app');
const { connect } = require('./config/database');

const PORT = process.env.PORT || 3000;

connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
