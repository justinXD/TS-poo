import { ProductHttpService } from './services/product-http.service';

(async ()=> {
  const productService = new ProductHttpService();

  try {
    console.log('--'.repeat(10));
    console.log('getAll');
    const products = await productService.get();
    console.log(products.length);
    console.log(products.map(item => item.price));

    const productId = products[0].id;
    console.log('--'.repeat(10));
    console.log('update');

    await productService.update(productId, {
      price: 10000,
      title: 'new title',
      description: 'new description'
    });
    console.log('--'.repeat(10));
    console.log('findOne');

    const product = await productService.getOne(productId);
    console.log(product);
  } catch (error) {
    console.error(error);
  }


})();
