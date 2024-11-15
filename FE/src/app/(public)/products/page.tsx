import BreadcrumbComponent from "@/app/(public)/products/_components/breadcrumb"
import FilterTotal from "@/app/(public)/products/_components/filter-total"
import { ChevronDownIcon } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import FilterSingleBlock from "@/app/(public)/products/_components/filter-single-block"
import productApiRequest from "@/apiRequest/product"
import ProductCard from "@/app/(public)/_components/product-card"


export default async function ProductsPage() {
  const products = await productApiRequest.getList();
  return (
    <>
      <BreadcrumbComponent />
      <div className="products-collection-wrap min-h-[1000px]">
        <div className="contaner-fluid w-content mx-auto px-[10px] ">
          <div className="bg-white rounded">
            <div className="product-filter p-6">
              <div className="filter-wrap flex relative">
                <FilterTotal />
                <FilterSingleBlock />
              </div>
              <div className="collection-sortby mt-[10px] flex items-center justify-end">
                <div className="sortby-control">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Xếp theo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Xếp theo</SelectLabel>
                        <SelectItem value="1">Nổi bật</SelectItem>
                        <SelectItem value="2">Tên từ A-Z</SelectItem>
                        <SelectItem value="3">Tên từ Z-A</SelectItem>
                        <SelectItem value="4">Giá tăng dần</SelectItem>
                        <SelectItem value="5">Giá giảm dần</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="w-full mt-4">
                <div className="grid grid-cols-5 gap-1">
                  {(products.payload as any).data.map((item: any, index: number) => (
                    <ProductCard key={index} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
