import { GetCategoriesRes } from "@/app/(private)/admin/categories/all/test-context";
import http from "@/lib/http";

const categoryApiRequest = {
  findAll: (queryString: string) => {

    return http.get<GetCategoriesRes>(`api/categories?${queryString}`, {
      cache: 'no-cache'
    })
  },
  getListForNav: () => {
    return http.get<any>(`api/categories/for-nav`, {
      cache: 'no-cache'
    })
  },
  getListCateForBreadCrumbs: (slug: string) => http.get<any>(`api/categories/category/for-breadcrumbs/${slug}`, { cache: 'no-cache' }),
  findById: (id: string) => http.get<any>(`api/categories/category/${id}`, {
    cache: 'no-cache'
  }),
  create: (payload: any) => http.post('api/categories/category', payload),
}

export default categoryApiRequest;