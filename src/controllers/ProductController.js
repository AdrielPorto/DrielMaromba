const productRepository = require('../repositories/ProductRepository');

class ProductController {
  async index(request, response) {
    const products = await productRepository.findAll();
    return response.json(products);
  }

  async show(request, response) {
    const product = await productRepository.findById(request.params.id);
    if (!product) {
      return response.status(404).json({ error: 'Produto não encontrado' });
    }
    return response.json(product);
  }

  async store(request, response) {
    try {
      const product = await productRepository.create(request.body);
      return response.status(201).json(product);
    } catch (error) {
      return response.status(400).json({ error: 'Erro ao criar produto' });
    }
  }

  async update(request, response) {
    const product = await productRepository.update(request.params.id, request.body);
    if (!product) {
      return response.status(404).json({ error: 'Produto não encontrado' });
    }
    return response.json(product);
  }

  async delete(request, response) {
    const product = await productRepository.delete(request.params.id);
    if (!product) {
      return response.status(404).json({ error: 'Produto não encontrado' });
    }
    return response.status(204).send();
  }
}

module.exports = new ProductController();
