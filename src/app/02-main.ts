import { ProductMemoryService } from "./services/product-memory.service";

const productService = new ProductMemoryService();

productService.create({
  title: 'Producto 1',
  price: 100,
  description: 'bla bla bla',
  categoryId: 12,
  images: [],
  creationAt: new Date('2020/05/10'),
  updatedAt: new Date()
});

const products = productService.get()
const product = products[0].id

productService.update(product, {
  title: 'cambiar nombre'
})

console.log(productService.getOne(product))
