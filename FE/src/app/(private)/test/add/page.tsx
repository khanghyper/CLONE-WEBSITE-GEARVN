"use client"

import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { FormEvent, useEffect, useState } from "react"
import categoryApiRequest from "@/apiRequest/category"
import { toast, useToast } from "@/components/ui/use-toast"
import envConfig from "@/config"
import { useRouter } from "next/navigation"
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function AddPage() {
  const form = useFormik({
    initialValues: {
      title: '',
      price: 0,
      category: '',
      image: '',
      description: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required().min(5),
      description: Yup.string().required().min(5),
      price: Yup.number().required().min(0),
      category: Yup.string().required().min(5),
      image: Yup.string().required().min(5),
    }),
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      console.log(values);
    }
  })
  return (
    <div className="p-10">
      <form className="flex" onSubmit={form.handleSubmit}>
        <div className='left flex-[8]'>
          <div className='size-full'>
            <div className='px-3'>
              <div className='w-full bg-white border rounded shadow-sm '>
                <div className='p-4 font-bold text-[16px] text-black border-b'>Tổng quan</div>
                <div className="p-4">
                  <div className="mb-4 text-[13.2px] font-medium">
                    <label className="mb-2 block text-[14px] text-gray-600">Tên sản phẩm</label>
                    <Input
                      {...form.getFieldProps('title')}
                      type="text"
                    />
                    {form.touched.title && form.errors.title ? (
                      <div className="text-red-500">{form.errors.title}</div>
                    ) : null}
                  </div>
                  <div className="mb-4 text-[13.2px] font-medium">
                    <label className="mb-2 block text-[14px] text-gray-600">Mô tả</label>
                    <Input
                      {...form.getFieldProps('description')}
                      type="text"
                    />
                    {form.touched.description && form.errors.description ? (
                      <div className="text-red-500">{form.errors.description}</div>
                    ) : null}
                  </div>
                  <div className="mb-4 text-[13.2px] font-medium">
                    <label className="mb-2 block text-[14px] text-gray-600">Danh mục</label>
                    <Input
                      {...form.getFieldProps('category')}
                      type="text"
                    />
                    {form.touched.category && form.errors.category ? (
                      <div className="text-red-500">{form.errors.category}</div>
                    ) : null}
                  </div>
                  <div className="mb-4 text-[13.2px] font-medium">
                    <label className="mb-2 block text-[14px] text-gray-600">Mô tả</label>
                    <Input
                      {...form.getFieldProps('price')}
                      type="number"
                    />
                    {form.touched.price && form.errors.price ? (
                      <div className="text-red-500">{form.errors.price}</div>
                    ) : null}
                  </div>
                  <div className="mb-4 text-[13.2px] font-medium">
                    <label className="mb-2 block text-[14px] text-gray-600">Hình ảnh</label>
                    <Input
                      {...form.getFieldProps('image')}
                      type="text"
                    />
                    {form.touched.image && form.errors.image ? (
                      <div className="text-red-500">{form.errors.image}</div>
                    ) : null}
                  </div>
                  <Button type="submit">Thêm</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
