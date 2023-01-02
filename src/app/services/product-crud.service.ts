import { BasteHttpService } from './base-http.service';
import { Product } from '../models/products.model';
import { UpdateProductDto } from '../dtos/product.dto';


export class ProductCRUDService {
  private url = 'https://api.escuelajs.co/api/v1/products/';
  private http = new BasteHttpService<Product>(this.url);

  async update(id: Product['id'], dto: UpdateProductDto){
    return this.http.update(id, dto);
  }

}
