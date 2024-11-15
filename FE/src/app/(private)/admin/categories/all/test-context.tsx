import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import { columns } from "./columns"
import { DataTable } from "./data-table"
import categoryApiRequest from "@/apiRequest/category";

export type Category = {
  "_id": string,
  "name": string,
  "description": string,
  "parentId": Category | undefined,
  "isActive": boolean,
  "slug": string
}
export interface GetCategoriesRes {
  message: string
  data: Category[]
  pageInfo: {
    pageSize: number
    pageIndex: number
    pageCount: number
    pagePrevious: number | undefined
    pageNext: number | undefined
  }
  count: number
}

export type Filter = {
  pageIndex?: number,
  pageSize?: number
  pagePrevious?: number | undefined
  pageNext?: number | undefined
}

export interface UserContextType {
  categories: Category[],
  filter: Filter
  pageCount: number
  count: number
  setCategories: Dispatch<SetStateAction<Category[]>>
  setFilter: Dispatch<SetStateAction<Filter>>
  setPageCount: Dispatch<SetStateAction<number>>
}

export const context = createContext<UserContextType | null>(null)



const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [categories, setCategories] = useState<Category[]>([])
  const [filter, setFilter] = useState<Filter>({
    pageIndex: 0,
    pageSize: 5
  })
  const [pageCount, setPageCount] = useState<number>(0)
  const [count, setCount] = useState<number>(0)

  const queryString = `pageIndex=${filter.pageIndex}&pageSize=${filter.pageSize}`

  useEffect(() => {
    const abx = async () => {
      const respones = await categoryApiRequest.findAll(queryString);
      setCategories([...respones.payload.data]);
      setCount(respones.payload.count)
      setPageCount(respones.payload.pageInfo.pageCount);
      setFilter(prev => ({ ...prev, pageNext: respones.payload.pageInfo.pageNext, pagePrevious: respones.payload.pageInfo.pagePrevious }))
    }
    abx()
  }, [queryString])
  return (
    <context.Provider value={{ categories, setCategories, filter, setFilter, pageCount, setPageCount, count }}>
      {children}
    </context.Provider>
  );
};
export default UserProvider


