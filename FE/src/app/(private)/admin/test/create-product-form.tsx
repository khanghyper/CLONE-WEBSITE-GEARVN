'use client'

import TongQuan from "@/app/(private)/admin/test/tong-quan";
import Anh from "@/app/(private)/admin/test/anh";
import Seo from "@/app/(private)/admin/test/seo";
import DanhMuc from "@/app/(private)/admin/test/danh-muc";
import ThuongHieu from "@/app/(private)/admin/test/thuong-hieu";
import ThuocTinh from "@/app/(private)/admin/test/thuoc-tinh";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import productApiRequest from "@/apiRequest/product";

export default function CreateProductForm() {
  const form = useFormik({
    initialValues: {
      name: '',
      price: '',
      shortDescription: '',
      description: '',
      thumbnail: '',
      images: [],
      categories: [],
      brand: '',
      attributes: [],
      metaTitle: '',
      metaKeyword: '',
      metaDescription: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      price: Yup.number().required(),
      shortDescription: Yup.string().required(),
      description: Yup.string().required(),
      thumbnail: Yup.string().required(),
      images: Yup.array(Yup.string()).required(),
      categories: Yup.array(Yup.string()).required(),
      brand: Yup.string().required(),
      attributes: Yup.array(),
      metaTitle: Yup.string().required(),
      metaKeyword: Yup.string().required(),
      metaDescription: Yup.string().required()
    }),
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      // if (form.getFieldProps('categories').value.length === 0) {
      //   setFieldError('categories', 'Categories is required!');
      // }
      // if (!values.thumbnail) {
      //   setFieldError('thumbnail', 'Thumbnail is required!');
      // }
      try {
        const response = await productApiRequest.create(values);

      } catch (error) {
        console.log(error);
      }
    },
  })


  return (
    <form onSubmit={form.handleSubmit}>
      <div className='flex'>
        <div className="w-2/3 px-3">
          <div className='w-full flex flex-col gap-6'>
            <TongQuan form={form} />
            <Anh form={form} />
            <Seo form={form} />
          </div>
        </div>
        <div className="w-1/3 px-3">
          <div className="w-full flex flex-col gap-6">
            <DanhMuc form={form} />
            <ThuongHieu form={form} />
            <ThuocTinh form={form} />
          </div>
        </div>
      </div>
      <button type="button" onClick={() => {
        console.log(form.values);
      }}>he</button>
      <Button type="submit">
        add
      </Button>
    </form>
  )
}
