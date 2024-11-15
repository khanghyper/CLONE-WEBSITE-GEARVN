export interface IProduct {
  "_id": string,
  "name": string,
  "slug": string,
  "price": number,
  "images": string[],
  "category": {
    "_id": string,
    "name": string
  },
  "description": string,
  "discount": string,
  "inventory": number,
  "status": "ACTIVE" | "DRAFT" | "INACTIVE"
}

export interface ProductListRes {
  data: IProduct[],
  "count": number,
  "currentPage": number,
  "totalPage": number,
  "nextPage": number | undefined,
  "previousPage": number | undefined
}
export interface IFilter {
  page: number
  limit: number,
  category: string,
  sort: string,
  status: 'ACTIVE' | 'INACTIVE' | 'DRAFT' | ''
}
