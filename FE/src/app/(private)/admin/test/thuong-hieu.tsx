'use client'
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import brandApiRequest from "@/apiRequest/brand";

export default function ThuongHieu({ form }: { form: any }) {
  const [brands, setBrands] = useState<any[]>([]);

  useEffect(() => {
    const getBrands = async () => {
      try {
        const response = await brandApiRequest.findAll();
        setBrands(response.payload.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBrands()
  }, [])
  return (
    <div className="bg-white shadow rounded">
      <div className="p-4 font-semibold text-[15px] text-gray-700 border-b">
        Thương hiệu
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="w-full flex gap-3 flex-col text-gray-700">
          <Select onValueChange={(value) => {
            form.setFieldValue('brand', value);
          }}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Thuong hieu" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Thương hiệu</SelectLabel>
                {brands.map(item => (
                  <SelectItem key={item._id} value={item._id}>{item.name}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {form.touched.brand && form.errors.brand ? (
            <div className="text-red-500 text-[13px]">{form.errors.brand}</div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
