'use client'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCallback, useEffect, useRef, useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import envConfig from "@/config";
import { FieldInputProps } from "formik";


export default function TongQuan({ form }: { form: any }) {
  const [description, setDescription] = useState('');
  const reactQuillRef = useRef<ReactQuill>(null);
  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = async () => {
      if (input !== null && input.files !== null) {
        const file = input.files[0];
        const formdata = new FormData();
        formdata.append('image', file);

        const response = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/api/images/upload/editor`, {
          method: 'POST',
          body: formdata
        }).then(res => res.json());
        const quill = reactQuillRef.current;
        if (quill) {
          const range = quill.getEditorSelection();
          range && quill.getEditor().insertEmbed(range.index, "image", response.data.url);
        }
      }
    };
  }, []);
  return (
    <div className="bg-white shadow rounded">
      <div className="p-4 font-semibold text-[15px] text-gray-700 border-b">
        Tổng quan
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="w-full flex gap-3 flex-col text-gray-700">
          <Label className="text-[14px] font-medium ">Tên sản phẩm</Label>
          <Input {...form.getFieldProps('name')} className="shadow-sm" />
          {form.touched.name && form.errors.name ? (
            <div className="text-red-500 text-[13px]">{form.errors.name}</div>
          ) : null}
        </div>
        <div className="w-full flex gap-4 text-gray-700">
          <div className="w-full flex gap-3 flex-col">
            <Label className="text-[14px] font-medium ">Giá</Label>
            <Input {...form.getFieldProps('price')} className="shadow-sm" type="number" />
            {form.touched.price && form.errors.price ? (
              <div className="text-red-500 text-[13px]">{form.errors.price}</div>
            ) : null}
          </div>
        </div>
        <div className="w-full flex gap-3 flex-col text-gray-700">
          <Label className="text-[14px] font-medium ">Mô tả</Label>
          <Input {...form.getFieldProps('shortDescription')} className="shadow-sm" />
          {form.touched.shortDescription && form.errors.shortDescription ? (
            <div className="text-red-500 text-[13px]">{form.errors.shortDescription}</div>
          ) : null}
        </div>
        <div className="w-full h-80 flex gap-3 flex-col text-gray-700">
          <Label className="text-[14px] font-medium ">Chi tiết</Label>
          <ReactQuill
            // className="h-20"
            style={{
              height: '200px'
            }}
            ref={reactQuillRef}
            theme="snow" value={description}
            onChange={setDescription}
            onBlur={() => {
              form.setFieldValue('description', description)
            }}
            modules={{
              toolbar: {
                container: [
                  [{ header: "1" }, { header: "2" }, { font: [] }],
                  [{ size: [] }],
                  ["bold", "italic", "underline", "strike", "blockquote"],
                  [
                    { list: "ordered" },
                    { list: "bullet" },
                    { indent: "-1" },
                    { indent: "+1" },
                  ],
                  ["link", "image", "video"],
                  ["code-block"],
                  ["clean"],
                ],
                handlers: {
                  image: imageHandler,   // <- 
                },
              },
              clipboard: {
                matchVisual: false,
              },
            }}
            formats={[
              "header",
              "font",
              "size",
              "bold",
              "italic",
              "underline",
              "strike",
              "blockquote",
              "list",
              "bullet",
              "indent",
              "link",
              "image",
              "video",
              "code-block",
            ]}
          />
          {form.touched.description && form.errors.description ? (
            <div className="text-red-500 text-[13px]">{form.errors.description}</div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
