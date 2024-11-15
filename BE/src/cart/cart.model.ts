import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Product } from "src/product/product.model";
import * as mongoose from 'mongoose'

@Schema({ timestamps: true, collection: 'Carts' })
export class Cart {
  @Prop([{
    type: {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      },
      qty: Number
    },
    default: []
  }])
  // cartItems: {
  //   product: mongoose.Schema.Types.ObjectId,
  //   qty: number
  // }[]
  cartItems: any[]
}

export const CartSchema = SchemaFactory.createForClass(Cart)
