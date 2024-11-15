'use client'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";


export default function ThuocTinh({ form }: { form: any }) {

  const [attributes, setAttributes] = useState<any[]>([]);

  return (
    <div className="bg-white shadow rounded">
      <div className="p-4 font-semibold text-[15px] text-gray-700 border-b">
        Thuộc tính
      </div>
      <div className="p-4 gap-4">
        <div className="w-full  text-gray-700">
          {attributes.map((item, index) => (
            <div className="w-full" key={index}>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <Label>Tên thuộc tính</Label>
                  <Input
                    className="mt-2"
                    value={item.name}
                    onChange={(e) => {
                      setAttributes((prev: any[]) => {
                        prev[index].name = e.target.value;
                        form.setFieldValue('attributes', [...prev])
                        return [...prev]
                      })
                    }}
                  />
                </div>
                <div className="w-1/2 ">
                  <Label >Giá trị</Label>
                  <Input
                    className="mt-2"
                    value={item.value}
                    onChange={(e) => {
                      setAttributes((prev: any[]) => {
                        prev[index].value = e.target.value;
                        form.setFieldValue('attributes', [...prev])
                        return [...prev]
                      })
                    }}
                  />
                </div>
              </div>
              <div className="w-full text-right px-4 pt-1 text-[14px] text-red-500 font-semibold ">
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    setAttributes((prev: any[]) => {
                      prev.splice(index, 1);
                      form.setFieldValue('attributes', [...prev])
                      return [...prev]
                    })
                  }}
                >
                  Xóa
                </span>
              </div>
            </div>
          ))}
        </div>
        <span
          className="text-blue-800 text-[14px] font-bold cursor-pointer"
          onClick={() => {
            setAttributes((prev: any) => [...prev, { name: '', value: '' }])
          }}
        >
          Thêm thuộc tính
        </span>
      </div>
    </div>
  )
}
