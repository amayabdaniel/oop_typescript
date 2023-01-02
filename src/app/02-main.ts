import {ProductMemoryService} from './services/product-memory.service';

const productService = new ProductMemoryService();

productService.create({
  title: 'Product 1',
  description: 'Description 1',
  price: 100,
  categoryId: 1,
  images: []
});

const products = productService.getAll();
const productId = products[0].id;

productService.update(productId, {
  title: 'Product 1.1',
});

const rta = productService.findOne(productId);

console.log(rta);
