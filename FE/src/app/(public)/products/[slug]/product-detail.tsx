'use client'

import cartApiRequest from "@/apiRequest/cart";
import { formatCurrentcy } from "@/app/(public)/_components/product-card"
import { toast } from "@/components/ui/use-toast";
import { clientAccessToken } from "@/lib/http";
import { localStorageService } from "@/lib/local-storage";
import { getCart } from "@/redux/slices/cart-slice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { StarFilledIcon } from "@radix-ui/react-icons"
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function ProductDetail(props: any) {
  const [qty, setQty] = useState<number>(1)
  const dispatch = useAppDispatch();

  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
  }

  const handleAddItem = async () => {
    try {
      if (clientAccessToken.value) {
        const addItemRes = await cartApiRequest.addItem({
          product: props._id,
          qty
        })
        const getCartRes = await cartApiRequest.getCart();
        dispatch(getCart({
          cart: getCartRes.payload.data.cart.cartItems,
          totalPrice: getCartRes.payload.data.totalPrice,
          totalQty: getCartRes.payload.data.totalQty,
        }))
      } else {
        // localStorageService.addItem({
        //   name: props.name,
        //   _id: props._id,
        //   price: props.price,
        //   priceSale: props.priceSale,
        //   qty,
        //   thumbnail: props.thumbnail
        // })
        // const cart = localStorageService.get();
        // if (cart) {
        //   dispatch(getCart({
        //     cart: cart.cartItems,
        //     totalPrice: cart.totalPrice,
        //     totalQty: cart.totalQty
        //   }))
        // }
      }
      toast({
        title: 'Thanh cong',
        description: 'Them gio hang thanh cong!',
        variant: 'success'
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='flex gap-3'>
      <div className='flex-[594px] p-4'>
        <div className='w-full'>
          <div className='size-[562px]'>
            <img src={props.thumbnail} alt="" className='size-full object-cover' />
          </div>
        </div>
        <div className='mt-4 w-full'>
          <div className='grid grid-cols-6 gap-3'>
            <div className='w-full'>
              <img src={props.thumbnail} alt="" className='w-full h-full border rounded object-cover' />
            </div>
            {props.images.map((item: any) => (
              <div key={item} className='w-full'>
                <img src={item} alt="" className='w-full h-full border rounded object-cover' />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex-[594px] p-6'>
        <div className='size-full'>
          <div className="info-top">
            <div className='mb-2 text-[18px] font-bold'>
              {props.name}
            </div>
            <div className='py-2 flex text-[14px] font-medium items-center gap-2 '>
              <span>Mã SP: |</span>
              <span>Đánh giá: 19 |</span>
              <span>Bình luận: 19 |</span>
              <span>Lượt xem: 190</span>
            </div>
            <div className='py-2 flex text-[14px] font-medium items-center gap-1'>
              <span>Tình trạng: <span className="text-green-500">Còn hàng</span></span>
            </div>
            <div className="w-full my-2 p-4 border rounded-lg flex items-center bg-[#f5fbfd] gap-2">
              <span className="font-semibold text-[30px] text-red-600 ">{formatCurrentcy(props.price)}</span>
              <del className="text-[18px] text-gray-600 font-medium">40.000.000₫</del>
              <span className="text-[14px] text-red-600 font-medium">Tiết kiệm 1.100.000đ</span>
            </div>
            <div className='mb-4 flex text-[16px] font-semibold items-center gap-1'>
              <span className='text-[#FF8A00]'>0</span>
              <StarFilledIcon color='#FF8A00' />
            </div>
            <div className='w-full'>
              <div className='w-full flex items-center gap-4'>
                <span className="text-[14px] font-medium">Số lượng: </span>
                <div className="flex">
                  <button onClick={() => {
                    if (qty > 1) setQty(qty - 1)
                  }} className="size-10 border-l border-t border-b rounded-tl-sm rounded-bl-sm">-</button>
                  <input onChange={(e) => setQty(+e.target.value)} type="text" min={1} step={1} className="border outline-none h-10 w-16 text-center" value={qty} />
                  <button onClick={() => setQty(qty + 1)} className="size-10 border-r border-t border-b rounded-tr-sm rounded-br-sm">+</button>
                </div>
                <button className="text-[14px] flex border rounded h-10 px-4 items-center justify-center gap-2  "><ShoppingCart size={16} /> Thêm vào giỏ hàng</button>
              </div>
              <div className='pt-2.5 pb-4'></div>
              <div className='size-full'>
                <div className='mb-2'>
                  <button onClick={handleAddItem} className='px-2.5 pt-2.5 pb-[14px] rounded-sm border border-[#E30019] text-white text-center w-full bg-[#E30019]'>
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
