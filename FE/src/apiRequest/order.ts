import http from "@/lib/http";

const orderApiRequest = {
  create: () => http.get<any>('api/orders/order')
}

export default orderApiRequest;