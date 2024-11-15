

import { Product } from '@/app/(public)/_components/row-product';
import ProductDetailBlock from '@/app/(public)/products-test/[slug]/product-detail-block';
import http from '@/lib/http';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {

  // const data: { data: Product } = await fetch(`http://localhost:3210/api/v1/products/test/${params.slug}`, { cache: 'no-cache' })
  //   .then(res => res.json());

  const product: { status: number, payload: { data: Product } } = await http.get(`api/v1/products/test/${params.slug}`);


  // useEffect(() => {
  //   fetch(`http://localhost:3210/api/v1/products/test/${params.slug}`, { cache: 'no-cache' })
  //     .then(res => res.json())
  //     .then(data => {
  //       setProduct({ ...data.data })
  //     })
  // }, [])



  return (
    <div className="bg-body py-5">
      <div className="w-content mx-auto my-0 px-[10px]">
        <div className="w-full h-full bg-secondary rounded-[0.15rem]">
          <ProductDetailBlock {...product.payload.data} />
        </div>
      </div>
    </div>
  )
}
