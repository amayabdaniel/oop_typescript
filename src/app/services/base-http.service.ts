import axios from "axios";
import { Category } from "../models/category.model";
import { Product } from "../models/products.model";

export class BasteHttpService<TypeClass> {
  //private data: TypeClass[] = [];

  constructor(protected url: string) {

  }

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }

  async update(id: Product['id'], changes: unknown) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}



(async () => {
  const url1 = 'https://api.escuelajs.co/api/v1/products/';
  const productService = new BasteHttpService<Product>(url1);

  const rta1 = await productService.getAll();
  console.log('products', rta1.length);

  const url2 = 'https://api.escuelajs.co/api/v1/categories/';
  const categoryService = new BasteHttpService<Category>(url1);

  const rta2 = await categoryService.getAll();
  console.log('categories', rta2.length);

})();
