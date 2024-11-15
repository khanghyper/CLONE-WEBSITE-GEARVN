'use client'

import orderApiRequest from "@/apiRequest/order"
import { clientAccessToken } from "@/lib/http"
import { getCart } from "@/redux/slices/cart-slice";
import { useAppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation"

export default function BtnCheckout() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleCheckOut = async () => {
    if (clientAccessToken.value) {
      try {
        const res = await orderApiRequest.create();
        const orderId = res.payload.data.orderId;
        router.push('/cart/checkout-success/' + orderId);
        dispatch(getCart({
          cart: [],
          totalPrice: 0,
          totalQty: 0
        }))
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <div className="p-6 border-t">
      <button onClick={handleCheckOut} className='bg-[red] text-white w-full p-5 rounded-md text-[17px] font-semibold'>ĐẶT HÀNG NGAY</button>
    </div>
  )
}
