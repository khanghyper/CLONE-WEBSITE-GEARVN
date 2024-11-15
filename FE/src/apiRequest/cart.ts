import http from "@/lib/http";

const cartApiRequest = {
  getCart: () => http.get<any>('api/carts/cart'),
  addItem: (payload: { product: string, qty: number }) => http.post<any>('api/carts/cart/add', payload),
  updateQty: (payload: { product: string, qty: number }) => http.post<any>('api/carts/cart/update-qty', payload),
}

export default cartApiRequest;