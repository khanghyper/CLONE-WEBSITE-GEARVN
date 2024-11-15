import { Injectable, UploadedFile, Query, Body, UnprocessableEntityException, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types, ObjectId } from 'mongoose';
import { ProductQueryDto } from 'src/product/product.dto';
import { omit } from 'lodash';
import {
  Product,
} from 'src/product/product.model';
import slugify from 'slugify';

// interface TestProductI {
//   name: string,
//   thumb: string,
//   price: number,
//   promotion: string
// }

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) { }

  getList = async () => {
    // let res = await fetch('http://localhost:3000/products').then(res => res.json());
    // let products = [...res]
    // for (let product of products) {
    //   await this.productModel.create({
    //     ...product, slug: this.transToSlug(product.name)
    //   })
    // }
    const response = await this.productModel.find({})
      // .populate('brand')
      // .populate('categories')
      .select('name thumbnail slug price priceSale promotionPercentText')

    return {
      message: 'OK',
      data: response
    }
  }

  findBySlug = async (slug: string) => {
    return {
      message: 'OK',
      data: await this.productModel.findOne({
        slug: slug
      })
    }
  }


  create = async (payload: any) => {
    try {
      const foundProduct = await this.productModel.findOne({
        name: payload.name
      })
      if (foundProduct) throw new UnprocessableEntityException({
        errors: [
          { field: 'name', message: 'san pham da ton tai!' }
        ],
        message: 'Entity error!',
        statusCode: 422
      })

      const foo = payload.categories.map((item: string) => {
        return new Types.ObjectId(item)
      })

      console.log({ foo });

      const createProductRes = await this.productModel.create({ ...payload });
      return {
        message: 'OK',
        data: createProductRes
      }
    } catch (error) {
      console.log(error);
    }
  }
  transToSlug(name) {
    return slugify(name, {
      replacement: '-',
      remove: undefined,
      lower: true,
      strict: true,
      locale: 'vi',
      trim: true
    })
  }

}
