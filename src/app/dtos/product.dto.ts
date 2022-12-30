import { IProduct } from './../models/product.model';
import { ICategory } from './../models/category.model';

export interface ICreateProductDto extends Omit<IProduct, 'id' | 'category'>{
  categoryId: ICategory['id'];
}

export interface IUpdateProductDto extends Partial<ICreateProductDto> {}
