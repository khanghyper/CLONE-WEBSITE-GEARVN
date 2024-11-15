
import './style.css';
import CouponBlock from '@/app/(public)/cart/_components/coupon-block';
import SectionStep from '@/app/(public)/cart/_components/section-step';
import SectionOrder from '@/app/(public)/cart/_components/section-order';
import SectionInfoTotal from '@/app/(public)/cart/_components/section-info-total';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { auth } from '@/auth';
import EmptyCart from '@/app/(public)/cart/_components/empty-cart';


export default async function CartPage() {
  const session = await auth();


  return <>
    <div className='breadcrumb'>
      <div className='p-4'>
        <Link href={'/products-test'} className='flex gap-2 items-center text-[#1982F9]'>
          <ChevronLeft size={16} strokeWidth={1} />
          Mua thêm sản phẩm khác
        </Link>
      </div>
    </div>
    <div className="cart-main bg-white rounded-sm">
      {session
        ? (
          <>
            <SectionStep />
            <SectionOrder />
            <CouponBlock />
            <SectionInfoTotal href={'/cart/info'} />
          </>)
        : (<EmptyCart />)
      }
    </div>
  </>
}
