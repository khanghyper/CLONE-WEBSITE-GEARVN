'use client'
import productApiRequest from '@/apiRequest/product';
import ProductCard from '@/app/(public)/_components/product-card'
import { getProduct, IproductInFilter } from '@/redux/slices/filter-product.slice'
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { useEffect, useState } from 'react'

export default function FilterProductBlock({ kind }: { kind: string }) {
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.productFilter.items);
  const queryString = useAppSelector(state => state.productFilter.queryString);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await productApiRequest.findProductsByKind(kind, queryString);
        dispatch(getProduct(res.payload.data))
      } catch (error) {

      }
    }
    getData()
  }, [dispatch, queryString])

  return (
    <div className="mt-4 bg-white rounded w-full p-2">
      <div className="grid grid-cols-5 gap-1">
        {products.map((item: any, index: number) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
    </div>
  )
}
