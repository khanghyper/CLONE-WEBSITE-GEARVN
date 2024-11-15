'use client'

import CartItem from '@/app/(public)/cart/_components/cart-item'
import { RootState, useAppDispatch, useAppSelector } from '@/redux/store'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const SectionOrder = () => {
  const cart = useAppSelector(state => state.cart.items)
  // const dispatch = useAppDispatch();
  // useEffect(() => {

  // }, [dispatch])


  return (
    <section className='section-order p-6 '>
      <div className='w-full h-full flex flex-col gap-8'>
        {cart.map((item, index) => (
          <CartItem cartItem={item.product as any} qty={item.qty} key={index} />
        ))}
      </div>
    </section>
  )
}

export default SectionOrder