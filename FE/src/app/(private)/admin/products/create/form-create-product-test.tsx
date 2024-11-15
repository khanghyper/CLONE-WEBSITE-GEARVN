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
  price: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().gte(10000, 'Must be 10000 and above')
  ),
  inventory: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().gte(1, 'Must be 1 and above')
  ),
  category: z.string().min(1).max(50),
  description: z.string().min(2).max(50),
  discount: z.string().min(1).max(3),
  status: z.enum(['ACTIVE', 'INACTIVE', 'DRAFT']),
  image: z.string()
})

type FormType = z.TypeOf<typeof formSchema>

type CategoriesResType = { ['_id']: string, name: string }[]

export default function FormCreateProductTest() {
  const [image, setImage] = useState<File | null | string>(null);
  const [isSelectImageUrl, setIsSelectImageUrl] = useState<boolean>(false);
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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      category: '',
      description: '',
      discount: '',
      status: "ACTIVE",
      image: ''
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (isSelectImageUrl) {
      try {
        const createProductRes = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/api/v1/product-test`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values)
        }).then(res => res.json());
        toast({
          title: 'Thành công',
          description: 'Thêm mới sản phẩm thành công',
          variant: 'success'
        })
        router.push('/admin/products/all')
      } catch (error) {
        toast({
          title: 'Lỗi',
          description: 'Có lỗi xãy ra!',
          variant: 'destructive'
        })
      }
    } else {
      if (!image) {
        setErrorMessageImage('image is required!');
        return
      }
      const formData = new FormData();
      for (const key in values) {
        if (key !== 'image') {
          formData.append(key, values[key as keyof typeof values].toString());
        }
      }
      formData.append('image', image)

      try {
        const createProductRes = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/api/v1/product-test`, {
          method: 'POST',
          body: formData,
        }).then(res => res.json());
        toast({
          title: 'Thành công',
          content: 'Thêm mới sản phẩm thành công!',
          variant: 'success'
        })
        router.push('/admin/products/all');
      } catch (error) {
        toast({
          title: 'Thất bại',
          content: 'Có lỗi xảy ra!',
          variant: 'destructive'
        })
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
                              <Input {...field} type="text" />
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
                            <Select onValueChange={field.onChange}>
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
                        <Select onValueChange={field.onChange}>
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
                    <div className="items-top flex items-center space-x-2 mb-2">
                      <Checkbox checked={isSelectImageUrl} onCheckedChange={() => setIsSelectImageUrl(!isSelectImageUrl)} className="checked:bg-gray-200" id="terms1" />
                      <div className="gap-1.5 grid items-center">
                        <label
                          htmlFor="terms1"
                          className="block text-[14px] text-gray-600 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Upload ảnh bằng URL
                        </label>
                      </div>
                    </div>
                    {isSelectImageUrl ? (
                      <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                          <FormItem className="mb-4 text-[13.2px] font-medium">
                            <FormLabel className="mb-2 block text-[14px] text-gray-600">URL ảnh</FormLabel>
                            <FormControl>
                              <Input {...field} type="text" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    ) : (
                      <>
                        <label className="mb-2 block text-[14px] text-gray-600">Tải ảnh</label>
                        <Input type="file" onChange={(e) => {
                          const files = (e.target as HTMLInputElement).files;
                          if (files && files.length > 0) {
                            setImage(files[0])
                          }
                        }} />
                        {errorMessageImage ? (
                          <div className="text-red-500">{errorMessageImage}</div>
                        ) : ''}
                      </>
                    )}

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
