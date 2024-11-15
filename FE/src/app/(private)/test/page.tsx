'use client'
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link";
import { useEffect, useState } from "react"


export default function TestPage() {
  const [products, setProducts] = useState<any>([]);
  const [init, setInit] = useState<any>([])
  const [input, setInput] = useState<string>('')

  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => {
      setProducts([...data]);
      setInit([...data])
    })
  }, [])

  useEffect(() => {
    const result = init.filter((item: any) => {
      if ((item.title as string).toLowerCase().includes(input.toLowerCase())) {
        return true;
      } else return false;
    })
    setProducts([...result])
  }, [input])

  return (
    <>
      <div className="px-10 py-1">
        <Input placeholder="Tìm kiếm" onInput={(e) => {
          const target = e.target as HTMLInputElement;
          const searchInput = target.value;
          setInput(searchInput);
        }} />
      </div>
      <div className="p-10">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">STT</TableHead>
              <TableHead>Tên sản phẩm</TableHead>
              <TableHead>Giá</TableHead>
              <TableHead className="">Ảnh</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((item: any, index: number) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>
                  <Link href={'/test/' + item.id}>{item.title}</Link>
                </TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell className="">
                  <img src={item.image} alt="" className="size-10" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </div>
    </>
  )
}
