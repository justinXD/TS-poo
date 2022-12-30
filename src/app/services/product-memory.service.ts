import { IProduct } from "../models/product.model";
import { ICreateProductDto, IUpdateProductDto } from "../dtos/product.dto";
import { faker } from "@faker-js/faker";
import { ProductService } from "../models/product-service.model";

export class ProductMemoryService implements ProductService{
  constructor(private products: IProduct[] = []) {}

  create(data: ICreateProductDto): IProduct {
    const newProduct = {
      ...data,
      id: faker.datatype.number(),
      creationAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        creationAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        image: faker.image.imageUrl()
      }
    }
    return this.add(newProduct)
  }

  add(product: IProduct) {
    this.products.push(product);
    return product
  }

  update(id: IProduct['id'], changes: IUpdateProductDto) {  // busqueda por indice de tipado, con esto obtengo el tipado
    const index = this.products.findIndex((item) => item.id === id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes
    }
    return this.products[index]
  }

  getOne(id: IProduct['id']) {
    return this.products.find((item) => item.id === id)
  }

  get() {
    return this.products;
  }

}
