import { Model } from 'mongoose';
import { Product } from './product.schema';
export declare class ProductService {
    private productModel;
    constructor(productModel: Model<any>);
    create(product: Product): Promise<Product>;
    readAll(): Promise<Product[]>;
    readById(id: any): Promise<Product>;
    update(id: any, Product: Product): Promise<Product>;
    delete(id: any): Promise<any>;
}
