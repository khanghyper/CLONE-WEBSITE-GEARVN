'use client'

import ProductCard from "@/app/(public)/_components/product-card";
import RangeSlider from "@/app/(public)/_components/range-slide";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import Link from "next/link";

interface QueryI {
  [key: string]: string | undefined | number
}

export default function Abx() {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [query, setQuery] = useState<QueryI>({})
  const [totalPage, setTotalPage] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [nextPage, setNextPage] = useState(0)
  const [previousPage, setPreviousPage] = useState(0)

  const handleQuery = (query: QueryI): string => {
    let abx: string[] = []
    for (const key in query) {
      if (query.hasOwnProperty(key)) {
        if (query[key]) {
          abx.push(`${key}=${query[key]}`)
        }
      }
    }
    return abx.join('&')
  }


  useEffect(() => {
    const controller = new AbortController()
    fetch(`http://localhost:3210/api/v1/products/test?${handleQuery(query)}`, { cache: 'no-cache', signal: controller.signal })
      .then(res => res.json())
      .then((data: any) => {
        setProducts(data.data)
        setTotalPage(data.totalPage)
        setCurrentPage(data.currentPage)
        setNextPage(data?.nextPage ? data.nextPage : 0)
        setPreviousPage(data?.previousPage ? data.previousPage : 0)
      })
      .catch(err => { })

    return () => { controller.abort() }
  }, [handleQuery(query)])

  useEffect(() => {
    const controller = new AbortController()
    fetch('http://localhost:3210/api/v1/products/categories/test', { cache: 'no-cache', signal: controller.signal })
      .then(res => res.json())
      .then((data: any) => setCategories(data.data))
      .catch(err => { })

    return () => { controller.abort() }

  }, [])

  return <>
    <div className="section-heading py-3 pl-6 pr-7 flex justify-between">
      <Select onValueChange={(value) => {
        if (value !== 'all') {
          setQuery((prev) => ({ ...prev, category: value, page: 1 }))
        } else {
          setQuery((prev) => ({ ...prev, category: undefined, page: 1 }))
        }
      }}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Danh mục" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Danh mục</SelectLabel>
            <SelectItem value="all">Tất cả</SelectItem>
            {categories?.map((item: any, index: number) => (
              <SelectItem key={index} value={item['_id']}>{item.name}</SelectItem>
            ))}
          </SelectGroup>

        </SelectContent>
      </Select>
      <Select onValueChange={(value) => {
        if (value !== 'all') {
          setQuery((prev) => ({ ...prev, sort: value, page: 1 }))
        } else {
          setQuery((prev) => ({ ...prev, sort: undefined, page: 1 }))
        }
      }}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sắp xếp" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sắp xếp</SelectLabel>
            <SelectItem value="all">Tất cả</SelectItem>
            <SelectItem value="name">Tên từ A-Z</SelectItem>
            <SelectItem value="-name">Tên từ Z-A</SelectItem>
            <SelectItem value="price">Giá tăng dần</SelectItem>
            <SelectItem value="-price">Giá giảm dần</SelectItem>
          </SelectGroup>

        </SelectContent>
      </Select>
    </div>
    <div className="section-content px-[6px] pt-2">
      <div className="w-full h-full">
        <div className="section-content px-[6px] pt-2">
          <div className="w-full h-full">
            <div className="list w-full h-full grid grid-cols-5">
              {products?.map((item: any, index: number) => (
                <ProductCard {...item} key={index} />
              ))}
            </div>
            <Pagination className="py-4">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious onClick={() => {
                    if (previousPage) {
                      setQuery((prev) => ({ ...prev, page: previousPage }))
                      window.scrollTo(0, 0);
                    }
                  }} />
                </PaginationItem>
                {Array.from({ length: totalPage }, (_, i) => i + 1).map(item => (
                  <PaginationItem key={item}>
                    <PaginationLink onClick={() => {
                      setCurrentPage(item)
                      setQuery((prev) => ({ ...prev, page: item }))
                      window.scrollTo(0, 0);
                    }} isActive={item === currentPage}>
                      {item}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem >
                  <PaginationNext onClick={() => {
                    if (nextPage) {
                      setQuery((prev) => ({ ...prev, page: nextPage }))
                      window.scrollTo(0, 0);
                    }
                  }} />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  </>
}
