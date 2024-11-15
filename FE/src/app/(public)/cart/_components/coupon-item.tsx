import React from 'react'

const CouponItem = () => {
  return (
    <div className="couponitem relative py-2 ">
      <div className='ax relative flex rounded-lg border'>
        <div className="left relative ">
          <div className='absolute left-[77px] w-2.5 h-2.5 rounded-full border top-[-6px]'></div>
          <div className='absolute left-[77.5px] w-[9px] rounded h-[2px] bg-[white] top-[-2px]'></div>
          <div className='absolute left-[76px] w-[12px] h-[6px] bg-[white] top-[-7px]'></div>
          <div className='size-20 flex justify-center items-center'>
            <div className='size-[72px]'>
              <span>
                <img className='w-full h-full object-cover' src="https://theme.hstatic.net/200000636033/1001030143/14/coupon_2_img.png?v=177" alt="" />
              </span>
            </div>
          </div>
          <div className='absolute left-[77px] w-2.5 h-2.5 rounded-full border bottom-[-6px]'></div>
          <div className='absolute left-[77.5px] w-[9px] rounded h-[2px] bg-[white] bottom-[-2px]'></div>
          <div className='absolute left-[76px] w-[12px] h-[6px] bg-[white] bottom-[-7px]'></div>
        </div>
        <div className="right w-full px-1 py-1.5">
          <div className="cp-top pb-1 pr-6">
            <p className='text-[13px] font-medium'>Giảm 300.000₫</p>
            <p className='text-[11px]'>Đơn hàng từ 3000K</p>
          </div>
          <div className="cp-bt flex items-center justify-between text-[10px]">
            <div>
              <p>Mã: <strong>DAILY100</strong></p>
              <p>HSD: Thứ 3, 23:59 30 Thg 04, 2024</p>
            </div>
            <div className='flex items-end h-full mt-[5px]'>
              <button className='bg-[#2485f6] text-white text-[13px] rounded-2xl px-[25px] py-0.5'>Áp dụng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CouponItem