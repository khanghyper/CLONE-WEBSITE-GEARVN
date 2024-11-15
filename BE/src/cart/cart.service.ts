import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Cart } from 'src/cart/cart.model';
import { User } from 'src/user/model/user.model';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name) private readonly cartModel: Model<Cart>,
    @InjectModel(User.name) private readonly userModel: Model<User>
  ) { }

  getCart = async (id: string) => {
    const cart = await this.cartModel.findById(id)
      .populate('cartItems.product', 'name _id price priceSale thumbnail');

    const totalQty = cart.cartItems.reduce((init, cur) => init + cur.qty, 0)
    const totalPrice = cart.cartItems.reduce((init, cur) => init + (cur.qty * (cur.product.priceSale ? cur.product.priceSale : cur.product.price)), 0);
    return {
      message: "OK",
      data: {
        cart,
        totalPrice,
        totalQty
      }
    }
  }

  create = async () => {
    const cart = (await this.cartModel.create({ cartItems: [] }));
    return cart;
  }

  addItem = async (id: string, payload: { product: ObjectId, qty: number }) => {
    const res = await this.cartModel.findById(id);
    let index = res.cartItems.findIndex(item => item.product.toString() === payload.product);
    if (index !== -1) {
      res.cartItems[index].qty = res.cartItems[index].qty + payload.qty;
    } else {
      res.cartItems.push(payload)
    }
    await res.save()
    return {
      message: "OK"
    }
  }

  deleteItem = async (id: string, payload: any) => {
    const res = await this.cartModel.findById(id);
    let cart1 = res.cartItems.filter(item => item.product.toString() !== payload.product);
    res.cartItems = [...cart1]
    await res.save()
    console.log(res.cartItems);
    return {
      message: "OK"
    }
  }
}
