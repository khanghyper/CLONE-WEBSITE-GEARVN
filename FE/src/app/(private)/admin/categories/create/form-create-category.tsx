'use client'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ClipboardPenLine, ImageUp, SaveIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useEffect, useRef, useState } from "react";
import categoryApiRequest from "@/apiRequest/category";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import envConfig from "@/config";
import { HttpError } from "@/lib/http";
import { toast } from "@/components/ui/use-toast";


const handleInputThumbnail = () => {
  (document.querySelector('.upload-thumbnail') as HTMLInputElement).click();
}
const handleInputImgs = () => {
  (document.querySelector('.upload-imgs') as HTMLInputElement).click();
}



export default function FormCreateCategory() {
  const [categories, setCategories] = useState<any>([]);
  const [flag, setFlag] = useState<boolean>(false)

  const form = useFormik<{
    name: string,
    description: string
    parentId: string,
  }>({
    initialValues: {
      name: '',
      description: '',
      parentId: '#',
      // image: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required().trim(),
      description: Yup.string().required().trim(),
      parentId: Yup.string().required().trim(),
      // image: Yup.mixed().required()
    }),
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      try {
        const body = values.parentId === '#' ? { ...values, parentId: undefined } : values;
        const response = await categoryApiRequest.create(body);
        toast({
          title: 'Thanh cong',
          description: 'Them moi danh muc thanh cong!',
          variant: 'success'
        })
        setFlag(!flag);
        form.resetForm();
      } catch (error) {
        if (error instanceof HttpError) {
          if (error.status === 422) {
            error.payload.errors.forEach((error: { field: string, message: string }) => {
              setFieldError(error.field, error.message);
            })
          } else {
            toast({
              title: 'Error',
              description: 'Something with wrong!',
              variant: 'destructive'
            })
          }
        } else {
          toast({
            title: 'Error',
            description: 'Something with wrong!',
            variant: 'destructive'
          })
        }
      }
    },
  })

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const getCategoiesRes = await categoryApiRequest.findAll(``);
        setCategories([...getCategoiesRes.payload.data]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCategories()
  }, [flag])

  const handleChangeCategory = async (value: string) => {
    form.setFieldValue('parentId', value);
  }

  return (
    <div className=''>
      <form onSubmit={form.handleSubmit}>
        <div className='flex'>
          <div className="w-2/3 px-3">
            <div className='w-full flex flex-col gap-6'>
              <div className="bg-white shadow rounded">
                <div className="p-4 font-semibold text-[15px] text-gray-700 border-b">
                  Tổng quan
                </div>
                <div className="p-4 flex flex-col gap-4">
                  <div className="w-full flex gap-3 flex-col text-gray-700">
                    <Label className={`text-[14px] font-medium ${form.errors.name ? 'text-red-500' : ''}`}>Tên danh mục</Label>
                    <Input {...form.getFieldProps('name')} className="shadow-sm" />
                    {form.touched.name && form.errors.name ? (
                      <div className="text-red-500 text-[13px]">{form.errors.name}</div>
                    ) : null}
                  </div>
                  <div className="w-full flex gap-3 flex-col text-gray-700">
                    <Label className="text-[14px] font-medium ">Mô tả</Label>
                    <Textarea {...form.getFieldProps('description')} className="h-[200px] shadow-sm" />
                    {form.touched.description && form.errors.description ? (
                      <div className="text-red-500 text-[13px]">{form.errors.description}</div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-end w-full rounded">
                  <button type="submit" className="flex items-center gap-2 border rounded px-6 py-2 bg-[#d2f4dd96] text-[#0f6d0f] font-semibold text-[15px]">
                    Lưu
                    <ClipboardPenLine size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 px-3">
            <div className='w-full flex flex-col gap-6'>
              <div className="bg-white shadow rounded">
                <div className="p-4 font-semibold text-[15px] text-gray-700 border-b">
                  Danh mục
                </div>
                <div className="p-4 flex flex-col gap-4">
                  <div className="w-full flex gap-3 flex-col text-gray-700">
                    <Label className="text-[14px] font-medium ">Danh mục cấp cha</Label>
                    <Select defaultValue="#" onValueChange={handleChangeCategory}>
                      <SelectTrigger >
                        <SelectValue placeholder="Chọn danh mục" />
                      </SelectTrigger>
                      <SelectContent className="max-h-60">
                        <SelectGroup>
                          <SelectLabel>Danh mục</SelectLabel>
                          <SelectItem className="py-2" value={'#'}>Không</SelectItem>
                          {categories.map((item: any, index: number) => (
                            <SelectItem key={index} value={item._id}>{item.name}</SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

