"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
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
import { useEffect, useState } from "react"
import categoryApiRequest from "@/apiRequest/category"
import { useToast } from "@/components/ui/use-toast"
import envConfig from "@/config"
import { useRouter } from "next/navigation"


const MAX_FILE_SIZE = 5000000
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
]
const IMAGE_URL_EXAMPLE = 'https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80';

const PRODUCT_STATUS = ['ACTIVE', 'INACTIVE', 'DRAFT']

const formSchema = z.object({
  name: z.string().min(2).max(50),
  price: z.coerce.number(),
  inventory: z.coerce.number(),
  category: z.string().min(1).max(50),
  description: z.string().min(2).max(50),
  discount: z.string().min(1).max(3),
  status: z.enum(['ACTIVE', 'INACTIVE', 'DRAFT']),
  image: z.string()
})

type FormType = z.TypeOf<typeof formSchema>

type CategoriesResType = { ['_id']: string, name: string }[]

export default function FormCreateProductTestCopy({ data }: { data: any }) {



  const [image, setImage] = useState<File | null | string>(null);
  const [previewImage, setPreviewImage] = useState<string>(data.images[0]);
  const [categories, setCategories] = useState<CategoriesResType>([])
  const [errorMessageImage, setErrorMessageImage] = useState<string>('');
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await categoryApiRequest.findAll();

        const categoriesRes = (result as { status: number, payload: { data: CategoriesResType } }).payload.data;
        setCategories([...categoriesRes]);
      } catch (error) {
        toast({
          title: 'Lỗi',
          description: 'Có lỗi xảy ra!',
          variant: 'destructive'
        })
      }
    }
    fetchCategories();
  }, [])


  // 1. Define your form.
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: data.name,
      category: data.category,
      description: data.description,
      discount: data.discount,
      status: data.status,
      image: data.images[0],
      inventory: data.inventory,
      price: data.price
    },
  })


  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (image) {
      const formData = new FormData();

      for (let key in values) {
        if (key !== 'image') {
          formData.append(key, values[key as keyof typeof values].toString())
        }
      }
      formData.append('image', image)
      formData.append('_id', data._id)


      try {
        const res = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/api/v1/product-test`, {
          body: formData,
          method: 'PUT'
        })
        if (res.ok) {
          toast({
            title: 'Thành công',
            description: 'Cập nhật sản phẩm thành công',
            variant: 'success'
          })
          router.push('/admin/products/all');
        }
      } catch (error) {
        console.log(error);
      }

    } else {
      try {
        const res = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/api/v1/product-test`, {
          body: JSON.stringify({ ...values, _id: data._id }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'PUT'
        })
        if (res.ok) {
          toast({
            title: 'Thành công',
            description: 'Cập nhật sản phẩm thành công',
            variant: 'success'
          })
          router.push('/admin/products/all');
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className='size-full'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex">
          <div className='left flex-[8]'>
            <div className='size-full'>
              <div className='px-3'>
                <div className='w-full bg-white border rounded shadow-sm '>
                  <div className='p-4 font-bold text-[16px] text-black border-b'>Tổng quan</div>
                  <div className="p-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="mb-4 text-[13.2px] font-medium">
                          <FormLabel className="mb-2 block text-[14px] text-gray-600">Tên sản phẩm</FormLabel>
                          <FormControl>
                            <Input placeholder="shadcn" {...field} type="text" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex gap-4">
                      <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                          <FormItem className="mb-4 text-[13.2px] font-medium w-1/2">
                            <FormLabel className="mb-2 text-[14px] block text-gray-600">Giá</FormLabel>
                            <FormControl>
                              <Input {...field} type="number" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="inventory"
                        render={({ field }) => (
                          <FormItem className="mb-4 text-[13.2px] font-medium w-1/2 relative">
                            <FormLabel className="mb-2  text-[14px] block text-gray-600">Tồn kho</FormLabel>
                            <FormControl className="">
                              <Input {...field} type="number" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="flex gap-4">
                      <FormField
                        control={form.control}
                        name="discount"
                        render={({ field }) => (
                          <FormItem className="mb-4 text-[13.2px] font-medium w-1/2">
                            <FormLabel className="mb-2 text-[14px] block text-gray-600">Giảm giá</FormLabel>
                            <FormControl>
                              <Input {...field} type="text" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                          <FormItem className="mb-4 text-[13.2px] font-medium w-1/2">
                            <FormLabel className="mb-2 text-[14px] block text-gray-600">Trạng thái</FormLabel>
                            <Select value={field.value} onValueChange={field.onChange}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Trạng thái" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {PRODUCT_STATUS.map((item, index) => (
                                  <SelectItem key={index} value={item}>{item}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem className="mb-4 text-[13.2px] font-medium">
                          <FormLabel className="mb-2 block text-[14px] text-gray-600">Chi tiết sản phẩm</FormLabel>
                          <FormControl>
                            <Textarea {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Thêm</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right flex-[4]">
            <div className='px-3'>
              <div className='w-full bg-white border rounded shadow-sm'>
                <div className='p-4 font-semibold text-[16px] text-black border-b'>Danh mục</div>
                <div className="p-4">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem className="mb-4 text-[13.2px] font-medium">
                        {/* <FormLabel className="mb-2 text-[14px] block text-gray-600">Danh mục</FormLabel> */}
                        <Select value={field.value} onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Danh mục" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {categories.length ? categories.map((item, index) => (
                              <SelectItem key={index} value={item._id}>{item.name}</SelectItem>
                            )) : (
                              <SelectItem value="1">1</SelectItem>
                            )}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className='px-3 mt-4'>
              <div className='w-full bg-white border rounded shadow-sm'>
                <div className='p-4 font-semibold text-[17px] text-black border-b shadow-sm'>Danh mục ảnh</div>
                <div className="p-4">
                  <div className="mb-4 text-[13.2px] font-medium">
                    <>
                      <label className="mb-2 block text-[14px] text-gray-600">Tải ảnh</label>
                      <Input type="file" onChange={(e) => {
                        const files = (e.target as HTMLInputElement).files;
                        if (files && files.length > 0) {
                          let file = files[0];
                          setPreviewImage(URL.createObjectURL(file))
                          setImage(file)
                        }
                      }} />
                      {errorMessageImage ? (
                        <div className="text-red-500">{errorMessageImage}</div>
                      ) : ''}
                    </>
                    <div className="mt-5">
                      <img className="size-20 border" src={previewImage} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Form>

    </div>
  )
}
