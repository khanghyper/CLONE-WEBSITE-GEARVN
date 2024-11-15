'use client'

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { addFilter } from "@/redux/slices/filter-product.slice";
import { useAppDispatch } from "@/redux/store"

export default function FilterCollection({ filter }: { filter: any }) {
  const dispatch = useAppDispatch();

  const handleChange = (name: string, value: string) => {
    if (name !== 'brand') {
      dispatch(addFilter({ name, value }))
    }
  }

  return (
    <div className="mt-4 bg-white rounded w-full">
      <div className="flex p-4 gap-10 w-full border-b">
        <div className="text-[14px] font-semibold w-32">Khoảng giá:</div>
        <div className="flex flex-wrap gap-2">
          <Button className="bg-gray-100 text-black hover:bg-gray-100 hover:text-black">Dưới 1 triệu</Button>
          <Button className="bg-gray-100 text-black hover:bg-gray-100 hover:text-black">Dưới 5 triệu</Button>
          <Button className="bg-gray-100 text-black hover:bg-gray-100 hover:text-black">Dưới 10 triệu</Button>
          <Button className="bg-gray-100 text-black hover:bg-gray-100 hover:text-black">Dưới 20 triệu</Button>
          <Button className="bg-gray-100 text-black hover:bg-gray-100 hover:text-black">Dưới 50 triệu</Button>
          <Button className="bg-gray-100 text-black hover:bg-gray-100 hover:text-black">Dưới 100 triệu</Button>
        </div>
      </div>
      <div className="flex p-4 gap-10 w-full">
        <div className="text-[14px] font-semibold w-40">Chọn theo tiêu chí:</div>
        <div className="flex flex-wrap gap-2">
          {filter?.map((item: any, index: number) => (
            <Select onValueChange={(val) => handleChange(item.name, val)} key={index}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={item.nameV} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>{item.nameV}</SelectLabel>
                  {item.values.map((item: any, index: number) => (
                    <SelectItem key={index} value={item.value} className="">{item.name}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          ))}
        </div>
      </div>
    </div>
  )
}
