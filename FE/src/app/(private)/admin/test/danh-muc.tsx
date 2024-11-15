'use client'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useCallback, useEffect, useRef, useState } from "react";
import categoryApiRequest from "@/apiRequest/category";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import brandApiRequest from "@/apiRequest/brand";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function DanhMuc({ form }: { form: any }) {
  const [categories, setCategories] = useState<any[]>([]);
  const [category1, setCategory1] = useState<string>('')
  const [category2, setCategory2] = useState<string>('')
  const [category3, setCategory3] = useState<string>('')

  useEffect(() => {
    const getCategories = async () => {
      // try {
      //   const response = await categoryApiRequest.findv1();
      //   setCategories(response.payload.data);
      // } catch (error) {
      //   console.log(error);
      // }
    }
    getCategories();
  }, []);
  return (
    <div className="bg-white shadow rounded">
      <div className="p-4 font-semibold text-[15px] text-gray-700 border-b">
        Danh mục
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="w-full flex gap-3 flex-col text-gray-700">
          {/* <Label className="text-[14px] font-medium ">Danh mục</Label> */}
          <ScrollArea className="h-72 rounded-md border">
            <div className="p-4">
              <RadioGroup value={category1} onValueChange={(value) => {
                setCategory1(value);
                setCategory2('')
                setCategory3('')
                form.setFieldValue('categories', [value]);
              }} defaultValue="">
                {categories?.map((item) => (
                  <div key={item._id} className="flex gap-2 space-x-2 py-1">
                    <div>
                      <RadioGroupItem value={item._id} />
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="-mt-1/2">{item.name}</AccordionTrigger>
                        <AccordionContent>
                          <div className="p-1 pt-3">
                            <RadioGroup value={category2} onValueChange={async (value) => {
                              const foo = await categoryApiRequest.findById(value);
                              setCategory1(foo.payload.data.parentId)
                              setCategory2(value)
                              setCategory3('')
                              form.setFieldValue('categories', [foo.payload.data.parentId, value]);
                            }}>
                              {item.categories.map((item: any) => (
                                <div key={item._id} className="flex gap-2 space-x-2 py-1">
                                  <div>
                                    <RadioGroupItem value={item._id} />
                                  </div>
                                  <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                      <AccordionTrigger className="-mt-1/2">{item.name}</AccordionTrigger>
                                      <AccordionContent>
                                        <div className="p-2">
                                          <RadioGroup value={category3} onValueChange={async (value) => {
                                            const foo = await categoryApiRequest.findById(value);
                                            const bar = await categoryApiRequest.findById(foo.payload.data.parentId);
                                            setCategory1(bar.payload.data.parentId)
                                            setCategory2(foo.payload.data.parentId)
                                            setCategory3(value)
                                            form.setFieldValue('categories', [bar.payload.data.parentId, foo.payload.data.parentId, value]);
                                          }}>
                                            {item.categories.map((item: any) => (
                                              <div key={item._id} className="flex gap-2 space-x-2 py-1">
                                                <div>
                                                  <RadioGroupItem value={item._id} />
                                                </div>
                                                {item.name}
                                              </div>
                                            ))}
                                          </RadioGroup>
                                        </div>
                                      </AccordionContent>
                                    </AccordionItem>
                                  </Accordion>
                                </div>
                              ))}
                            </RadioGroup>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                ))}
              </RadioGroup>

            </div>
          </ScrollArea>

        </div>
        {form.touched.categories && form.errors.categories ? (
          <div className="text-red-500 text-[13px]">{form.errors.categories}</div>
        ) : null}
      </div>
    </div>
  )
}
