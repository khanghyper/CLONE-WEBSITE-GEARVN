'use client'

import { formatCurrentcy } from "@/app/(public)/_components/product-card"
import { Product } from "@/app/(public)/_components/row-product"
import { addProduct } from "@/redux/slices/cart-slice"
import { RootState } from "@/redux/store"
import { StarFilledIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function ProductDetailBlock(props: Product) {


  window.scrollTo(0, 0);

  return (
    <div className='flex'>
      <div className='flex-[35%] p-6'>
        <div className='w-full'>
          <div className='size-[372px]'>
            <img src={props.images[0]} alt="" className='size-[372px] object-cover' />
          </div>
        </div>
        <div className='mt-4 w-full'>
          <div className='grid grid-cols-5 gap-4'>
            <div className='w-full'>
              <img src={props.images[0]} alt="" className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
      </div>
      <div className='flex-[65%] p-6 border-r border'>
        <div className='size-full'>
          <div className="info-top">
            <div className='mb-2 text-[24px] font-semibold'>
              {props.name}
            </div>
            <div className='mb-4 flex text-[16px] font-semibold items-center gap-1'>
              <span className='text-[#FF8A00]'>0</span>
              <StarFilledIcon color='#FF8A00' />
            </div>
            <div className='size-full'>
              <div className="flex items-center gap-4">
                <span className='text-[#E30019] font-semibold text-[32px]'>{formatCurrentcy((props.price as number) * (100 - (+(props.discount as string))) / 100)}</span>
                <del className='text-[18px] text-[#6D6E72] font-normal'>{formatCurrentcy((props.price as number))}</del>
                <div className='px-2 py-[3px] text-red-600 rounded border border-red-600 text-[12px] font-normal'>-{props.discount}%</div>
              </div>
              <div className='py-2'>
                <input type="number" className='p-1 border' step={1} min={1} />
              </div>
              <div className='pt-2.5 pb-4'></div>
              <div className='size-full'>
                <div className='mb-2'>
                  <button className='px-2.5 pt-2.5 pb-[14px] rounded-sm border border-[#E30019] text-white text-center w-[380px] bg-[#E30019]'>
                    <span className='block text-[18px] font-semibold'>MUA NGAY</span>
                    <span className='block text-[14px] font-normal mt-[3px]'>Giao tận nơi hoặc nhận tại cửa hàng</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
