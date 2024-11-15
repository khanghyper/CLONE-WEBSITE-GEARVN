'use client'
import { Checkbox } from "@/components/ui/checkbox"
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import Test from "@/app/(private)/admin/products/all/test"
import Feature from "@/app/(private)/admin/products/all/feature"
import { useEffect, useState } from "react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { toast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import PaginationCustom from "@/app/(private)/admin/products/all/pagination-custom"
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store"
import { changeFilter, getProductList, getProductListWithSearch, selectAllProducts, selectOneProduct } from "@/redux/slices/product.slice"
import { IFilter } from "@/types/product"
import envConfig from "@/config"





const ProductSkeleton = () => {
  return (
    <TableRow>
      <TableCell className="">
        <Skeleton className="size-5" />
      </TableCell>
      <TableCell className="font-medium flex gap-2">
        <div>
          <Skeleton className="size-[80px] border rounded" />
        </div>
        <Skeleton className="w-60 rounded-lg" />
      </TableCell>
      <TableCell>
        <Skeleton className="w-1/2 h-20 rounded-lg" />
      </TableCell>
      <TableCell>
        <Skeleton className="w-20 h-20 rounded-lg" />
      </TableCell>
      <TableCell className="">
        <Skeleton className="w-1/2 h-20 rounded-lg" />
      </TableCell>
      <TableCell>
        <Skeleton className="w-1/2 h-20 rounded-lg" />
      </TableCell>
      <TableCell>
        <Skeleton className="w-10 h-20 rounded-lg" />
      </TableCell>
    </TableRow>
  )
}

const searchParamsTransform = (payload: IFilter): string => {
  let text: string[] = [];
  for (let key in payload) {
    if (payload[key as keyof IFilter]) {
      text.push(`${key}=${payload[key as keyof IFilter]}`)
    }
  }
  return text.join('&')
}

const nameProductTransform = (name: string) => {
  if (name.length > 72) {
    return name.slice(0, 72) + '...'
  } return name;
}

export default function DataTableV2() {
  const dispatch = useAppDispatch();
  const productList = useAppSelector((state: RootState) => state.product.data);
  const pagingInfo = useAppSelector((state: RootState) => state.product.pagingInfo);
  const productListIdSelected = useAppSelector((state: RootState) => state.product.productListIdSelected)
  const filter = useAppSelector((state: RootState) => state.product.filter);
  const searchString = useAppSelector((state: RootState) => state.product.searchString);
  const loading = useAppSelector((state: RootState) => state.product.loading);
  const filterString = searchParamsTransform(filter);
  const router = useRouter();

  useEffect(() => {
    const promise = searchString ? dispatch(getProductListWithSearch({ search: searchString, query: filterString })) : dispatch(getProductList(filterString));

    return () => {
      promise.abort()
    }
  }, [filterString, searchString])


  return (
    <>
      <div className="p-8 pb-0 px-2">
        <div className="flex text-[14px] font-medium items-center">
          <div
            className=
            {`px-2 pr-4 border-r-[2px] border-black transition-all cursor-pointer 
              ${filter.status === '' ? 'text-blue-800' : 'hover:text-blue-800 hover:underline'}
            `}
            onClick={() => {
              dispatch(changeFilter({ status: '', page: 1, sort: '' }))
            }}
          >
            Tất cả sản phẩm
          </div>
          <div
            className=
            {`px-2 pr-4 border-r-[2px] border-black transition-all cursor-pointer 
              ${filter.status === 'ACTIVE' ? 'text-blue-800' : 'hover:text-blue-800 hover:underline'}
            `}
            onClick={() => {
              dispatch(changeFilter({ status: 'ACTIVE', page: 1, sort: '' }))
            }}
          >
            Hiển thị </div>
          <div
            className=
            {`px-2 pr-4 border-r-[2px] border-black transition-all cursor-pointer 
              ${filter.status === 'DRAFT' ? 'text-blue-800' : 'hover:text-blue-800 hover:underline'}
            `}
            onClick={() => {
              dispatch(changeFilter({ status: 'DRAFT', page: 1, sort: '' }))
            }}
          >
            Nháp
          </div>
          <div
            className=
            {`px-2 pr-4 border-black transition-all cursor-pointer 
              ${filter.status === 'INACTIVE' ? 'text-blue-800' : 'hover:text-blue-800 hover:underline'}
            `}
            onClick={() => {
              dispatch(changeFilter({ status: 'INACTIVE', page: 1, sort: '' }))
            }}
          >
            Thùng rác
          </div>
        </div>
      </div>
      <Feature />
      <div className="p-2 border shadow-lg ">
        <Table className="">
          <TableHeader>
            <TableRow>
              <TableHead className="py-5">
                <div className="pr-3">
                  <Checkbox
                    className=""
                    onCheckedChange={(checked) => {
                      const productListId = productList.map(item => item._id);
                      dispatch(selectAllProducts(checked ? productListId : []))
                    }}
                    checked={productList.length === productListIdSelected.length}
                  />
                </div>
              </TableHead>
              <TableHead className=" font-semibold text-[16px] text-black">Sản phẩm</TableHead>
              <TableHead className=" font-semibold text-[16px] text-black">Số lượng</TableHead>
              <TableHead className=" font-semibold text-[16px] text-black">Giá</TableHead>
              <TableHead className=" font-semibold text-[16px] text-black">Loại sản phẩm</TableHead>
              <TableHead className=" font-semibold text-[16px] text-black">Trạng thái</TableHead>
              <TableHead className=""></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {!loading &&
              productList.map((item) => (
                <TableRow key={item._id}>
                  <TableCell className="">
                    <Checkbox
                      checked={productListIdSelected.includes(item._id)}
                      onCheckedChange={(checked) => {
                        dispatch(selectOneProduct(item._id))
                      }}
                    />
                  </TableCell>
                  <TableCell className="font-medium flex gap-2">
                    <div>
                      <img src={item.images[0]} loading="lazy" alt="" className="size-[80px] border rounded" />
                    </div>
                    <div className="w-72 break-words whitespace-pre-wra">
                      {nameProductTransform(item.name)}
                    </div>
                  </TableCell>
                  <TableCell>{item.inventory}</TableCell>
                  <TableCell>
                    {
                      new Intl.NumberFormat("vi", {
                        style: "currency",
                        currency: "VND",
                      }).format(item.price)
                    }
                  </TableCell>
                  <TableCell className="">{item?.category ? item.category.name : 'không có'}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => {
                            router.push(`/admin/products/detail/${item._id}`)
                          }}
                        >Chi tiết sản phẩm</DropdownMenuItem>
                        <DropdownMenuItem onClick={async () => {
                          try {
                            const res = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/api/v1/product-test/${item._id}`, {
                              method: 'DELETE'
                            });
                            if (res.ok) {
                              toast({
                                title: 'Thành công',
                                description: 'Xóa sản phẩm thành công',
                                variant: 'success'
                              })
                              window.location.href = '/admin/products/all'
                              console.log(await res.json());
                            } else {
                              const error = await res.json();
                              throw new Error(error);
                            }
                          } catch (error) {
                            console.log(error);
                          }
                        }}>Xóa sản phẩm</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            }
            {
              loading &&
              Array.from({ length: filter.limit }, (_, i) => i + 1).map(item => (
                <ProductSkeleton key={item} />
              ))
            }
          </TableBody>
        </Table>
      </div>
      <div className="p-3 flex bg-inherit items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className="w-[60px] text-[13px] font-medium">Hiển thị</div>
          <Select defaultValue="5" onValueChange={(value) => {
            dispatch(changeFilter({ limit: +value, page: 1 }))
            dispatch(selectAllProducts([]))
            window.scrollTo(0, 0)
          }}>
            <SelectTrigger className="w-[60px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
          <div className="ml-1">/</div>
          <div className="ml-1 text-[13px]">{pagingInfo.count} sản phẩm</div>
        </div>
        <PaginationCustom pageSize={pagingInfo.totalPage} />
      </div>
    </>
  )
}
