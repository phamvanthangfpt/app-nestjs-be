import { Product } from './product.schema';
import { ProductService } from './products.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    createProduct(response: any, product: Product): Promise<any>;
    fetchAll(response: any): Promise<any>;
    findById(response: any, id: any): Promise<any>;
    update(response: any, id: any, product: Product): Promise<any>;
    delete(response: any, id: any): Promise<any>;
}
