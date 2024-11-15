'use client'

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react"

export type IProduct = {
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

export interface ProductRes {
  data: IProduct[],
  "count": number,
  "currentPage": number,
  "totalPage": number,
  "nextPage": number | undefined,
  "previousPage": number | undefined
}

export interface IFilter {
  page: number,
  nextPage: number | undefined,
  prevPage: number | undefined
  limit: number,
  category: string,
  sort: string,
  status: 'ALL' | 'ACTIVE' | 'INACTIVE' | 'DRAFT'
}

type AllProductsFilter = {
  filter: IFilter,
  setFilter: any,
  productIdList: string[],
  setProductIdList: any
}

export const initialFilter = {
  page: 1,
  limit: 5,
  category: '',
  sort: '',
  nextPage: 2,
  prevPage: undefined,
  status: "ALL"
} as IFilter

const initialProductIdList: string[] = []


const AllProductsContext = createContext<AllProductsFilter>({
  filter: initialFilter,
  setFilter: undefined,
  productIdList: initialProductIdList,
  setProductIdList: undefined
});

export default function AllProductsProvider({ children }: { children: React.ReactNode }) {
  const [filter, setFilter] = useState<IFilter>(initialFilter)
  const [productIdList, setProductIdList] = useState<string[]>([])
  return (
    <AllProductsContext.Provider value={
      {
        filter: filter,
        setFilter: setFilter,
        productIdList,
        setProductIdList
      }
    }>
      {children}
    </AllProductsContext.Provider>
  )
}

export const useAllProductContext = () => {
  return useContext(AllProductsContext)
}
