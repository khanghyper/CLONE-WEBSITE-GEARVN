'use client'

import { Label } from "@/components/ui/label";
import { ImageUp, XIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import imageApiRequest from "@/apiRequest/image";
import envConfig from "@/config";



const handleInputThumbnail = () => {
  (document.querySelector('.upload-thumbnail') as HTMLInputElement).click();
}
const handleInputImgs = () => {
  (document.querySelector('.upload-imgs') as HTMLInputElement).click();
}


export default function Anh({ form }: { form: any }) {
  const [thumbnail, setThumbnail] = useState<string>('');
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    return () => {
      thumbnail && URL.revokeObjectURL(thumbnail);
      if (images.length) {
        images.forEach(item => URL.revokeObjectURL(item))
      }
    }
  }, [thumbnail, images.length])

  const handleChangeThumbnail = async (e: any) => {
    let input = (e.target as HTMLInputElement);
    if (input.files && input.files?.length) {
      let file = input.files[0];
      setThumbnail(URL.createObjectURL(file))
      const formdata = new FormData();
      formdata.append('image', file);
      form.setFieldError('thumbnail', '');
      try {
        const respones = await imageApiRequest.upload(formdata);
        form.setFieldValue('thumbnail', respones.payload.data._id);
      } catch (error) {
        setThumbnail('')
        form.setFieldError('thumbnail', 'Something with wrong!');
      }
    }
  }

  return (
    <div className="bg-white shadow rounded">
      <div className="p-4 font-semibold text-[15px] text-gray-900 border-b">
        Hình ảnh
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="w-full flex flex-col text-gray-700">
          <Label className="text-[14px] font-medium ">Ảnh sản phẩm</Label>
          <div className="text-[12px] mt-1/2 text-gray-400 font-medium">Thêm ảnh đại diện cho sản phẩm</div>
          <div className=" mt-3  py-12 flex flex-col justify-center items-center">
            <div className="size-32 p-2 bg-[#fbfcfc] shadow rounded relative">
              <Input
                onChange={handleChangeThumbnail}
                accept="image/*"
                id="hidden-input"
                type="file"
                className="upload-thumbnail hidden"
              />
              {thumbnail && (
                <img className="size-full object-cover" src={thumbnail} alt="" />
              )}
              <div className="size-10 absolute -bottom-5 -right-5 rounded-full bg-[#fbfcfc] border ">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger type="button" className="size-full flex items-center justify-center">
                      <ImageUp onClick={handleInputThumbnail} size={16} />
                    </TooltipTrigger>
                    <TooltipContent className="bg-gray-500 text-white">
                      <div className="text-[12px]">Chọn ảnh</div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
          {form.touched.thumbnail && form.errors.thumbnail ? (
            <div className="text-red-500 text-[13px]">{form.errors.thumbnail}</div>
          ) : null}
        </div>
        <div className="w-full flex flex-col text-gray-700">
          <Label className="text-[14px] font-medium ">Bộ sưu tập ảnh</Label>
          <div className="text-[12px] mt-1/2 text-gray-400 font-medium">Thêm ảnh vào Bộ sưu tập</div>
          <div onClick={handleInputImgs} className="border-dashed mt-3 border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
            <Input
              id="hidden-input"
              type="file"
              multiple
              className="upload-imgs hidden"
              onChange={(e) => {
                if (e.target.files) {
                  let files = e.target.files;
                  const formdata = new FormData()
                  for (let i = 0; i < files.length; i++) {
                    let previewUrl = URL.createObjectURL(e.target.files[i]);
                    setImages(prev => [...prev, previewUrl])
                    formdata.append('images', files[i])
                  }
                  console.log(formdata.getAll('images'));
                }
              }}
            />
            <ImageUp />
            <div className="text-[14px] mt-2">Tải ảnh</div>
          </div>
          {
            images.length ? (
              <div className="flex gap-2 py-4">
                {images.map(item => (
                  <div key={item} className="relative size-20 border">
                    <img src={item} className="size-full object-cover" />
                    <div className="absolute -top-2 -right-2 rounded-full bg-red-600 text-white size-6 flex items-center justify-center">
                      <XIcon size={12} />
                    </div>
                  </div>
                ))}
              </div>
            ) : ''
          }
        </div>
      </div>
    </div>
  )
}
