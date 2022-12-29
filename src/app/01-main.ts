import { IProduct } from "./models/product.model";

import axios from "axios";

(async () => {

  async function getProducts() {
    const { data } = await axios.get<IProduct[]>('https://api.escuelajs.co/api/v1/products/');  // tipamos la respuesta de nuestra api
    return data;
  }

  const products = await getProducts();
  console.log(products.map((item) => `${item.id} - ${item.title}`))
})();
