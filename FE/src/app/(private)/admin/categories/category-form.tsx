"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function CategoryForm({ category }: {
  category: {
    _id: string,
    name: string,
    slug: string,
    description: string
  }
}) {
  const [errorMessage, setErrorMessage] = useState<string>('')
  const router = useRouter()


  const form = useFormik({
    initialValues: {
      name: category.name,
      description: category.description
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      description: Yup.string().required(),
    }),
    onSubmit: async (values, { setSubmitting, setFieldError }) => {

    },
  })

  return (
    <div className='size-full'>
      <form className="flex" onSubmit={form.handleSubmit}>
        <div className='left flex-[8]'>
          <div className='size-full'>
            <div className='px-3'>
              <div className='w-full bg-white border rounded shadow-sm '>
                <div className='p-4 font-bold text-[16px] text-black border-b'>Tổng quan</div>
                <div className="p-4">
                  <div className="mb-4 text-[13.2px] font-medium">
                    <label className="mb-2 block text-[14px] text-gray-600">Tên danh mục</label>
                    <Input
                      {...form.getFieldProps('name')}
                      type="text"
                    />
                    {form.touched.name && form.errors.name ? (
                      <div className="text-red-500">{form.errors.name}</div>
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
                  <Button type="submit">Thêm</Button>
                  {errorMessage ? (<div className="text-red-500">{errorMessage}</div>) : ''}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

    </div>
  )
}

