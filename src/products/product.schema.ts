import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type Document = Product;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  type: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
