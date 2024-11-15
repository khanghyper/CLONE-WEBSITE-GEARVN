import http from "@/lib/http";
import { IproductInFilter } from "@/redux/slices/filter-product.slice";

const productApiRequest = {
  create: (payload: any) => http.post('api/products/product', payload),
  getList: () => http.get('api/products', { cache: 'no-cache' }),
  getBySlug: (slug: string) => http.get<any>(`api/products/product/${slug}`),
  findProductsByKind: (kind: string, query?: string) => http.get<{ message: string, data: IproductInFilter[] }>(`api/products/kind/${kind}?${query}`)
}

export default productApiRequest