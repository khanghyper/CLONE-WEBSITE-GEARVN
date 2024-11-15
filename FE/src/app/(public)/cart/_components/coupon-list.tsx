'use client'

import CouponItem from "@/app/(public)/cart/_components/coupon-item"

const CouponList = ({ isShow }: { isShow: boolean }) => {
  return (
    <div className={`cart-couponlist transition-all ${isShow ? 'block' : 'hidden'}`}>
      <div className="transition-all">
        <div className='pt-3'>
          <div className="input-coupon relative p-2 bg-gray-100 rounded-sm flex">
            <input type="text" placeholder="Nhập mã giảm giá/Phiếu mua hàng" className='w-full border rounded-sm outline-none py-[2px] px-4' />
            <button className='w-[120px] px-[14px] text-white py-1 rounded-sm font-medium bg-[#1982F9] text-[16px] ml-2'>Áp dụng</button>
          </div>
        </div>
        <div className='couponlist'>
          <CouponItem />
          <CouponItem />
          <CouponItem />
        </div>
      </div>
    </div>
  )
}

export default CouponList