'use client'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { initialFilter, useAllProductContext } from "@/app/(private)/admin/products/all/all-products-provider"
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store"
import { changeFilter, changeStatusProductList, getProductList, getProductListWithSearch, selectAllProducts, setSearchString } from "@/redux/slices/product.slice"
import { IFilter } from "@/types/product"
import { useState } from "react"

const searchParamsTransform = (payload: IFilter): string => {
  let text: string[] = [];
  for (let key in payload) {
    if (payload[key as keyof IFilter]) {
      text.push(`${key}=${payload[key as keyof IFilter]}`)
    }
  }
  return text.join('&')
}

export default function Feature() {
  const dispatch = useAppDispatch();
  const productListIdSelected = useAppSelector((state: RootState) => state.product.productListIdSelected);
  const filter = useAppSelector((state: RootState) => state.product.filter);
  const searchString = useAppSelector((state: RootState) => state.product.searchString);
  const filterString = searchParamsTransform(filter);


  const handleSearchProduct = (e: any) => {
    const target = e.target as HTMLInputElement;
    dispatch(setSearchString(target.value))
  }

  return (
    <div className="p-2">
      <div className="flex items-center justify-between p-2">
        <div className="flex gap-2 items-center">
          <span className="text-[14px] font-bold">Chức năng:</span>
          {filter.status === 'INACTIVE' ? (
            <span className="text-[14px] font-medium text-red-500 cursor-pointer hover:underline">
              Xóa sản phẩm ( {productListIdSelected.length} )
            </span>
          ) : (
            <span
              className="text-[14px] font-medium text-red-500 cursor-pointer hover:underline"
              onClick={() => {
                if (productListIdSelected.length) {
                  dispatch(changeStatusProductList(productListIdSelected));
                  dispatch(changeFilter({ page: 1 }));
                  dispatch(getProductList(filterString));
                  dispatch(selectAllProducts([]));
                }
              }}
            >
              Thêm vô thùng rác ( {productListIdSelected.length} )
            </span>
          )}


        </div>
        <div className="flex gap-3">
          <Select
            value={filter.sort ? filter.sort : '#'}
            onValueChange={(value) => {
              dispatch(changeFilter({ sort: value === '#' ? '' : value, page: 1 }));
              dispatch(selectAllProducts([]));
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sắp xếp theo" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sắp xếp theo</SelectLabel>
                <SelectItem value="#">Mặc định</SelectItem>
                <SelectItem value="name"> Tên từ A - Z</SelectItem>
                <SelectItem value="-name"> Tên từ Z - A</SelectItem>
                <SelectItem value="price"> Giá tăng giần</SelectItem>
                <SelectItem value="-price"> Giá giảm giần</SelectItem>
                <SelectItem value="createdAt"> Sản phẩm cũ nhất</SelectItem>
                <SelectItem value="-createdAt"> Sản phẩm mới nhất</SelectItem>
                <SelectItem value="-updatedAt"> Sản phẩm được cập nhật gần đây</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Danh mục" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Danh mục</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div>
            <Input value={searchString} onChange={(e) => handleSearchProduct(e)} type="text" placeholder="Tìm kiếm" />
          </div>
        </div>
      </div>
    </div>
  )
}
