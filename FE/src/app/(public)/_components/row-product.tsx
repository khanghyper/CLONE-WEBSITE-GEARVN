
import ProductCard from "@/app/(public)/_components/product-card";
import { useEffect, useState } from "react";



export type Product = {

  _id: string,
  name: string
  slug: string
  price: number

  images: string[]

  category: string
  description: string
  discount: string
  inventory: number
  status: string
  createdAt: string
  updatedAt: string
  __v: number

}

type ProductsResponse = {
  count: number,
  data: Product[]
}

export default async function RowProduct(props: { path: string }) {
  // const [products, setProducts] = useState<any[]>([]);

  // useEffect(() => {
  //   fetch('http://localhost:4014/api/v1/product?limit=10')
  //     .then((res: Response) => res.json())
  //     .then((data: ProductsResponse) => {
  //       setProducts([...data.data]);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // }, [])
  // const products:ProductsResponse = await fetch(`http://localhost:4014/api/v1/product?limit=10${props.path}`, {cache: 'no-cache'}).then(res => res.json());



  return (
    <div className="list w-full h-full grid grid-cols-5">
      {/* {products.data?.map((item: Product, index: number) => (
        <ProductCard {...item} key={index}/>
      ))} */}
    </div>
  )
}
