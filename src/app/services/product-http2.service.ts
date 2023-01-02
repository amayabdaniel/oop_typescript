import { Product } from "../models/products.model";

import { BasteHttpService } from "./base-http.service";

export class ProductHttpService extends BasteHttpService<Product> {
  otroRequest() {
    return this.getAll();
  }
}
