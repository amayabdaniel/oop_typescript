import { ProductHttpService } from './product-http2.service';
import { Product } from '../models/products.model';
import { UpdateProductDto } from '../dtos/product.dto';


export class ProductCRUDService {
  private url = 'https://api.escuelajs.co/api/v1/products/';
  private http = new ProductHttpService(this.url);

  async update(id: Product['id'], dto: UpdateProductDto){
    this.http.otroRequest
    return this.http.update(id, dto);
  }

}