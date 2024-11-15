

import BtnCheckout from "@/app/(public)/cart/_components/btn-checkout";
import CouponBlock from "@/app/(public)/cart/_components/coupon-block";
import SectionInfoOrder from "@/app/(public)/cart/_components/section-info-order";
import SectionInfoTotal from "@/app/(public)/cart/_components/section-info-total";
import SectionStep from "@/app/(public)/cart/_components/section-step";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function CartPaymentOrder() {
  return (
    <>
      <div className='breadcrumb'>
        <div className='p-4'>
          <Link href={'/cart/info'} className='flex gap-2 items-center text-[#1982F9]'>
            <ChevronLeft size={16} strokeWidth={1} />
            Trở về
          </Link>
        </div>
      </div>
      <div className="cart-main bg-white rounded-sm">
        <SectionStep />
        <SectionInfoOrder />
        <BtnCheckout />
      </div>
    </>
  )
}
