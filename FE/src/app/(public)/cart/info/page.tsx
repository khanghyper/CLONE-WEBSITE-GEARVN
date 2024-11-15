'use client'

import SectionInfo from "@/app/(public)/cart/_components/section-info";
import SectionInfoTotal from "@/app/(public)/cart/_components/section-info-total";
import SectionShipping from "@/app/(public)/cart/_components/section-shipping";
import SectionStep from "@/app/(public)/cart/_components/section-step";
import { useGlobalContext } from "@/context/store";
import { ChevronLeft } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";


const CartInfoPage = () => {
  const { cartSteps, setCartSteps } = useGlobalContext();
  const pathname = usePathname();
  const router = useRouter()
  const { data: session } = useSession();
  if (session?.user) {
    router.push('/cart/payment-order')
  }

  return <>
    <div className='breadcrumb'>
      <div className='p-4'>
        <Link href={'/cart'} className='flex gap-2 items-center text-[#1982F9]'>
          <ChevronLeft size={16} strokeWidth={1} />
          Trở về
        </Link>
      </div>
    </div>
    <div className="cart-main bg-white rounded-sm">
      <SectionStep />
      <SectionInfo />
      {/* <CouponBlock/> */}
      <SectionShipping />
      <SectionInfoTotal href={'/cart/payment-order'} />
      {/* <EmptyCart/> */}
    </div>
  </>
}

export default CartInfoPage;