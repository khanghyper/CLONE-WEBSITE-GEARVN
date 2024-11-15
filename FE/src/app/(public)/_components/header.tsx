import CountCart from '@/app/(public)/_components/count-cart'
import { auth } from '@/auth'
import { HamburgerMenuIcon, MagnifyingGlassIcon, ClipboardIcon } from '@radix-ui/react-icons'
import { ClipboardCheckIcon, HeadsetIcon, ShoppingCartIcon, UserIcon } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import './header.css';
import BtnLogout from '@/app/(public)/_components/btn-logout'

const Header = async () => {
  const session = await auth();
  // const [name, setName] = useState<string>('')
  // const { data: session } = useSession()
  let name = await (session?.user as any)?.name;
  // const { data: session, status } = useSession();  


  return (
    <div className="sticky top-0 z-[10] bg-[#E30019] h-[74px]">
      <div className="p-0 m-0 h-full">
        <div className="w-content mx-auto my-0 h-full text-secondary px-[10px]">
          <div className="py-[16px] h-full flex">
            <div className="w-[260px] h-full flex items-center gap-4">
              <div className="h-8 w-[140px]">
                <Link href="/">
                  <img src="https://file.hstatic.net/200000636033/file/logo_fd11946b31524fbe98765f34f3de0628.svg" alt="" />
                </Link>
              </div>
              <div className="flex w-[104px] h-full bg-[#BE1529] rounded-sm cursor-pointer">
                <span className='w-[36px] h-[42px] flex items-center justify-center'>
                  <HamburgerMenuIcon className='w-[22px] h-[22px]' />
                </span>
                <span className="text-[13px] font-medium px-[3px] flex items-center justify-center">
                  Danh mục
                </span>
              </div>
            </div>
            <div className="w-[940px] flex">
              <div className='h-full ml-2'>
                <form action={'/search'} className='h-full w-[415px] relative'>
                  <div className='w-full h-full bg-secondary border rounded-md' >
                    <input name='search' type="text" placeholder='Bạn cần tìm gì?' className='py-2 pl-[15px] pr-[50px] text-gray-500 outline-none h-full w-full border-none rounded-md' />
                  </div>
                  <button type='submit' className='absolute w-[36px] h-full top-0 right-0 flex items-center justify-center'>
                    <MagnifyingGlassIcon className='text-primary w-[20px] h-[20px]' />
                  </button>
                </form>
              </div>
              <div className='flex gap-2 w-full'>
                <div className="w-[350px] grid grid-cols-3 ml-2 gap-2">
                  <div className='p-[5px] flex cursor-pointer'>
                    <div className='w-9 h-full flex items-center justify-center'>
                      <HeadsetIcon />
                    </div>
                    <div className='h-full flex items-center'>
                      <span className='text-[14px] font-medium'>0123.4567</span>
                    </div>
                  </div>
                  <div className='p-[5px] flex cursor-pointer'>
                    <div className='w-9 h-full flex items-center justify-center'>
                      <ClipboardCheckIcon size={20} />
                    </div>
                    <div className='h-full flex items-center'>
                      <span className='text-[14px] font-medium'>Đơn hàng</span>
                    </div>
                  </div>
                  <Link href="/cart" className='p-[5px] flex cursor-pointer'>
                    <div className='w-9 h-full flex items-center justify-center relative'>
                      <ShoppingCartIcon size={20} />
                      <CountCart />
                    </div>
                    <div className='h-full flex items-center'>
                      <span className='text-[14px] font-medium'>Giỏ hàng</span>
                    </div>
                  </Link>
                </div>
                <div className='p-[5px] w-[149px] flex bg-[#BE1529] border-none rounded-md cursor-pointer'>
                  <div className='w-9 h-full flex items-center justify-center'>
                    <UserIcon size={20} />
                  </div>
                  <div className='h-full flex items-center'>
                    {
                      name ? (
                        <span className='text-[14px] font-medium user relative'>
                          xin chào, {name}
                          <div className='hover absolute top-10 -left-7 py-2'>
                            <div className=' bg-white text-black w-40 rounded p-4'>
                              <BtnLogout />
                            </div>
                          </div>
                        </span>
                      ) : (
                        <span className='text-[14px] font-medium'>
                          <Link href={'/auth/login'}>Đăng nhập</Link>
                        </span>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header