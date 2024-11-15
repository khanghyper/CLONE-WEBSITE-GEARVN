'use client'

import '@/app/(public)/cart/style.css';
import { GlobalContextProvider } from '@/context/store';
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link';


export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GlobalContextProvider>
      <div className='w-full bg-body'>
        <div className='pb-6'>
          <div className='w-full'>
            <div className='w-[620px] px-[10px] mx-auto'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </GlobalContextProvider>
  )
}
