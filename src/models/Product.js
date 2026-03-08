const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  marca: { type: String, required: true },
  categoria: { type: String, required: true },
  descricao: { type: String, required: true },
  valor: { type: Number, required: true },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Product', ProductSchema);
