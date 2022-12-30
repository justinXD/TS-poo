import { ICreateProductDto, IUpdateProductDto } from "../dtos/product.dto";
import { IProduct } from "./product.model";

export interface ProductService {
  get(): IProduct[] | Promise<IProduct[]>;
  update(id: IProduct['id'], changes: IUpdateProductDto): IProduct | Promise<IProduct>;
  create(dto: ICreateProductDto): IProduct | Promise<IProduct>;
  getOne(id: IProduct['id']): IProduct | undefined | Promise<IProduct | undefined>;
}
