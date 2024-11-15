import Link from 'next/link'
import React from 'react'

const EmptyCart = () => {
  return (
    <section className='p-6'>
        <div className='w-full h-full'>
          <div className="text-center">
            <div className='mb-4 text-[14px] h-auto'>
              Giỏ hàng của bạn đang trống
              <p className='mt-4'>
                <Link href="/" className='inline-block px-6 py-2.5 border border-[#1982F9] text-[#1982F9] uppercase rounded'>Tiếp tục mua hàng</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default EmptyCart