'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Seo({ form }: { form: any }) {
  return (
    <div className="bg-white shadow rounded">
      <div className="p-4 font-semibold text-[15px] text-gray-700 border-b">
        Search engine optimize
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="w-full flex gap-3 flex-col text-gray-700">
          <Label className="text-[14px] font-medium ">Meta title</Label>
          <Input {...form.getFieldProps('metaTitle')} className="shadow-sm" />
          {form.touched.metaTitle && form.errors.metaTitle ? (
            <div className="text-red-500 text-[13px]">{form.errors.metaTitle}</div>
          ) : null}
        </div>
        <div className="w-full flex gap-3 flex-col text-gray-700">
          <Label className="text-[14px] font-medium ">Meta keyword</Label>
          <Input {...form.getFieldProps('metaKeyword')} className="shadow-sm" />
          {form.touched.metaKeyword && form.errors.metaKeyword ? (
            <div className="text-red-500 text-[13px]">{form.errors.metaKeyword}</div>
          ) : null}
        </div>
        <div className="w-full flex gap-3 flex-col text-gray-700">
          <Label className="text-[14px] font-medium ">Meta description</Label>
          <Input {...form.getFieldProps('metaDescription')} className="shadow-sm" />
          {form.touched.metaDescription && form.errors.metaDescription ? (
            <div className="text-red-500 text-[13px]">{form.errors.metaDescription}</div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
