import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { Brand } from 'src/brand/brand.model';
import { Category } from 'src/category/category.model';
import { Discount } from 'src/discount/discount.model';
import { Image } from 'src/image/image.model';

/**-------------------------Product schema------------------------- */

export type ProductDocument = Product & Document;

@Schema({
  timestamps: true,
  collection: 'Products',
})
export class Product {
  @Prop({
    type: String,
    required: true
  })
  name: string;

  @Prop({
    type: String,
  })
  slug: string;

  @Prop({
    type: Number,
    required: true
  })
  price: number;

  // @Prop({
  //   type: Types.ObjectId,
  //   ref: 'Image',
  // })
  // thumbnail: Image;

  @Prop({
    type: String,
  })
  thumbnail: string;

  // @Prop([{
  //   type: Types.ObjectId,
  //   ref: 'Image',
  //   default: []
  // }])
  // images: Image[]

  @Prop([{
    type: String,
    default: []
  }])
  images: string[]

  @Prop()
  description: string;

  @Prop()
  sortDescription: string;

  @Prop({
    type: Number,
    default: 0
  })
  inventory: number;

  @Prop([{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    default: []
  }])
  categories: Category[]

  // @Prop({
  //   type: String,
  //   enum: ['DRAFT', 'ACTIVE', 'ISDELETED'],
  //   default: 'ACTIVE',
  // })
  // status: string;
  @Prop({
    type: Types.ObjectId,
    ref: 'Brand',
  })
  brand: Brand

  @Prop([{
    name: {
      type: String,
    },
    value: {
      type: String
    }
  }])
  attributes: { name: string, value: string }[]

  @Prop({
    type: String,
    default: '0'
  })
  promotionPercentText: string

  @Prop({
    type: Number,
    default: 0
  })
  promotionPercent: number

  @Prop({
    type: Number
  })
  priceSale: number

  @Prop({
    type: Boolean,
    default: true
  })
  status: boolean

  @Prop({
    type: String,

  })
  metaTitle: boolean

  @Prop({
    type: String,
  })
  metaKeyword: boolean

  @Prop({
    type: String,
  })
  metaDescription: boolean

}

const ProductSchema = SchemaFactory.createForClass(Product);
ProductSchema.index({ name: 'text', description: 'text' });

export { ProductSchema };




/**-------------------------Image schema------------------------- */



/**-------------------------Attribute schema------------------------- */

