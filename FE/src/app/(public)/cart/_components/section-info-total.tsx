'use client'

import { formatCurrentcy } from "@/app/(public)/_components/product-card"
import { Button } from "@/components/ui/button"
import { useGlobalContext } from "@/context/store"
import { RootState } from "@/redux/store"
import { useRouter } from "next/navigation"
import { useSelector } from "react-redux"

const SectionInfoTotal = ({ href }: { href: string }) => {
  const router = useRouter();
  const { cartSteps, setCartSteps } = useGlobalContext();
  const cart = useSelector((state: RootState) => state.cart);



  const handleNavigate = () => {
    if (href === '/cart/info') {
      cartSteps[0].status = true;
      setCartSteps([...cartSteps]);
    } else if (href === '/cart/payment-order') {
      cartSteps[1].status = true;
      setCartSteps([...cartSteps]);
    } else {
      cartSteps[2].status = true;
      setCartSteps([...cartSteps]);
    }
    router.push(href);
  }

  return (
    <section className="section-info-total p-6">
      <div className="summary-shipping pb-2 flex justify-between text-[16px] font-semibold">
        <span>Phí vận chuyển:</span>
        <span>0</span>
      </div>
      <div className="summary-total flex justify-between mb-6">
        <span className='text-[16px] font-semibold'>Tổng tiền</span>
        <span className='text-[24px] font-semibold text-[red]'>{formatCurrentcy(cart.totalPrice)}</span>
      </div>
      <div className="summary-action">
        <button onClick={handleNavigate} className='bg-[red] text-white w-full p-5 rounded-md text-[17px] font-semibold'>ĐẶT HÀNG NGAY</button>
      </div>
    </section>
  )
}

export default SectionInfoTotal