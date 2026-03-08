const mongoose = require('mongoose');

const connect = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/drielmaromba';
  try {
    await mongoose.connect(uri);
    console.log('Conectado ao MongoDB');
  } catch (error) {
    console.error('Erro ao conectar com o MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = { connect };
