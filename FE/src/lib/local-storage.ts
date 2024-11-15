import { CartItem } from "@/redux/slices/cart-slice";

export const localStorageService = {
  get: (): { cartItems: CartItem[], totalQty: number, totalPrice: number } | null => {
    if (typeof window !== undefined) {
      const cart = localStorage.getItem('cart');
      if (cart) return JSON.parse(cart) as { cartItems: CartItem[], totalQty: number, totalPrice: number };
      else return null
    }
    return null;
  },
  addItem: (payload: CartItem) => {
    const cart = localStorageService.get();
    if (cart) {
      const index = cart.cartItems.findIndex(item => item.product._id === payload.product._id);
      if (index !== -1) {
        cart.cartItems[index].qty = cart.cartItems[index].qty + payload.qty;
        localStorageService.createCart({
          cartItems: [...cart.cartItems],
          totalQty: cart.cartItems.reduce((init, item) => init + item.qty, 0),
          totalPrice: cart.cartItems.reduce((init, cur) => init + (cur.qty * (cur.product.priceSale ? cur.product.priceSale : cur.product.price)), 0)
        })
      } else {
        cart.cartItems.push(payload);
        // localStorageService.createCart({
        //   cartItems: [...cart.cartItems],
        //   totalQty: cart.cartItems.reduce((init, item) => init + item.qty, 0),
        //   totalPrice: cart.cartItems.reduce((init, cur) => init + (cur.qty * (cur.priceSale ? cur.priceSale : cur.price)), 0)
        // })
      }
    } else {
      // localStorageService.createCart({
      //   cartItems: [payload],
      //   totalQty: payload.qty,
      //   totalPrice: (payload.priceSale ? payload.priceSale : payload.price) * payload.qty
      // })
    }
  },
  createCart: (payload: { cartItems: CartItem[], totalQty: number, totalPrice: number }) => {
    localStorage.setItem('cart', JSON.stringify(payload));
  }
}