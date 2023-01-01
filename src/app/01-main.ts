import axios from "axios";

import { Product } from './models/products.model';

let anyVar: any = 12;
let boolVar: boolean = anyVar;


(async () => {

  async function getProducts() {
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    return data;
  }

  const products = await getProducts();
  console.log(products.map(item => `${item.id} - ${item.title} - ${item.price} - ${item.description} - ${item.category.name} - ${item.images}`));

})()
