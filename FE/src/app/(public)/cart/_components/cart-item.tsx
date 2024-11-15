'use client'
import cartApiRequest from "@/apiRequest/cart"
import { formatCurrentcy } from "@/app/(public)/_components/product-card"
import { toast } from "@/components/ui/use-toast"
import { getCart } from "@/redux/slices/cart-slice"
import { useAppDispatch } from "@/redux/store"
import { Trash2Icon } from "lucide-react"
import { useState } from "react"
import { useDispatch } from "react-redux"

const CartItem = ({ cartItem, qty }: { cartItem: any, qty: number }) => {
  const dispatch = useAppDispatch();
  const handleUpdateQty = async (type: 'add' | 'minus') => {
    try {
      if (type === 'add') {
        const updateQtyRes = await cartApiRequest.updateQty({
          product: cartItem._id,
          qty: 1
        })
        const getCartRes = await cartApiRequest.getCart();
        dispatch(getCart({
          cart: getCartRes.payload.data.cart.cartItems,
          totalPrice: getCartRes.payload.data.totalPrice,
          totalQty: getCartRes.payload.data.totalQty,
        }))
      } else {
        if (qty > 1) {
          const updateQtyRes = await cartApiRequest.updateQty({
            product: cartItem._id,
            qty: -1
          })
          const getCartRes = await cartApiRequest.getCart();
          dispatch(getCart({
            cart: getCartRes.payload.data.cart.cartItems,
            totalPrice: getCartRes.payload.data.totalPrice,
            totalQty: getCartRes.payload.data.totalQty,
          }))
        }
      }
      toast({
        title: 'Thanh cong',
        description: 'Cap nhat san pham thanh cong!',
        variant: 'success'
      })
    } catch (error) {
      toast({
        title: "Error",
        description: 'Wrong!',
        variant: 'destructive'
      })
    }

  }

  return (
    <div className='cart-item flex'>
      <div className="left w-[90px] ">
        <div className="item-img w-full h-[90px] border-[0.8px]">
          <a className='block w-full h-full' href="#">
            <img className='w-full h-full object-cover' src={cartItem.thumbnail} alt="" />
          </a>
        </div>
        <div className="item-remove mt-2 flex justify-center gap-2	cursor-pointer">
          <Trash2Icon size={16} strokeWidth={1} />
          <span onClick={() => {
          }} className='text-[13px] text-gray-500 hover:text-[red] transition-all'>Xóa</span>
        </div>
      </div>
      <div className="right w-[454px] ml-2 flex">
        <div className="item-info w-[317.8px] pr-5">
          <a href="#">
            <div className='font-medium'>{cartItem.name}</div>
          </a>
        </div>
        <div className='item-meta w-[136.2px]'>
          <div className="item-price pb-4">
            {cartItem?.priceSale ? (
              <>
                <span className='text-[red] w-full inline-block text-right text-[18px] font-semibold'>{formatCurrentcy(cartItem.priceSale)}</span>
                <del className='text-right inline-block w-full text-[14px] text-gray-500'>{formatCurrentcy(cartItem.price)}</del>
              </>
            ) : (
              <span className='text-[red] w-full inline-block text-right text-[18px] font-semibold'>{formatCurrentcy(cartItem.price)}</span>
            )}

          </div>
          <div className='item-qty w-full flex'>
            <button
              onClick={() => handleUpdateQty('minus')}
              className='w-[30%] border h-8 rounded-tl rounded-bl'
            >
              -
            </button>
            <input className='w-[40%]  border-t border-b outline-none h-8 text-center' readOnly type="number" defaultValue={qty} value={qty} />
            <button
              onClick={() => handleUpdateQty('add')}
              className='w-[30%]  border h-8 rounded-tr rounded-br'
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem