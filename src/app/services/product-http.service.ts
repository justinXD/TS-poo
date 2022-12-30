import axios from 'axios';

import { IUpdateProductDto, ICreateProductDto } from "../dtos/product.dto";
import { ProductService } from "../models/product-service.model";
import { IProduct } from "../models/product.model";

export class ProductHttpService implements ProductService  {
  private url = 'https://api.escuelajs.co/api/v1/products';

  async get() {
    const { data } = await axios.get<IProduct[]>(this.url);
    return data;
  }

  async update(id: IProduct['id'], changes: IUpdateProductDto) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }

  async create(dto: ICreateProductDto) {
    const { data } = await axios.post(this.url, dto);
    return data;
  }

  async getOne(id: IProduct['id']) {
    const { data } = await axios.get(`${this.url}/${id}`);
    return data;
  }

}
