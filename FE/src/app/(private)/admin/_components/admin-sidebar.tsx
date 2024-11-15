'use client'

import {LayoutDashboard, PieChart, SendHorizontal, ShoppingBag, TestTube, TestTubeDiagonal, User} from "lucide-react"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { usePathname } from "next/navigation"


const sidebarItems = [
  {
    title: 'Bảng điều khiển',
    icon: <PieChart strokeWidth={2} size={18} />,
    sub: [],
    href: ''
  },
  {
    title: 'Sản phẩm',
    icon: <ShoppingBag strokeWidth={2} size={18} />,
    sub: [
      {
        title: 'Quản lý sản phẩm',
        icon: <SendHorizontal strokeWidth={2} size={12} />,
        href: 'all'
      },
      {
        title: 'Thêm mới sản phẩm',
        icon: <SendHorizontal strokeWidth={2} size={12} />,
        href: 'create'
      }
    ],
    href: 'products'
  },
  {
    title: 'Danh mục',
    icon: <LayoutDashboard strokeWidth={2} size={18} />,
    sub: [
      {
        title: 'Quản lý danh mục',
        icon: <SendHorizontal strokeWidth={2} size={12} />,
        href: 'all'
      },
      {
        title: 'Thêm mới danh mục',
        icon: <SendHorizontal strokeWidth={2} size={12} />,
        href: 'create'
      }
    ],
    href: 'categories'
  },
  {
    title: 'Người dùng',
    icon: <User strokeWidth={2} size={18} />,
    sub: [],
    href: 'users'
  },
  {
    title: 'Test',
    href: 'test',
    icon: <TestTubeDiagonal strokeWidth={2} size={18}/>,
    sub: []
  }
]


export default function AdminSidebar() {

  const pathname = usePathname();

  return (
    <div className="w-full h-screen sticky top-0">
      <div className="w-full h-full">
        <div className="h-[70px] px-[1.3rem]">
          <Link href={'/admin'} className="w-full h-full flex items-center justify-center">
            <img className="h-[17px]" src="https://themesbrand.com/velzon/html/saas/assets/images/logo-dark.png" alt="" />
          </Link>
        </div>
        <div className="w-full h-[calc(100%-70px)] shadow-sm">
          <div className="h-10" />
          <div className="w-full">
            <ul className="flex flex-col text-gray-600">
              {sidebarItems.map((item, index: number) => (
                <li key={index}>
                  <div className={`
                    
                    `}>
                    {item.sub.length === 0 ? (
                      <Link href={`/admin/${item.href}`}
                        className={`
                        flex gap-4 items-center text-gray-600 py-2.5 px-6 transition-all
                        ${((item.href === '' && pathname === '/admin') || (item.href !== '' && pathname.endsWith(item.href))) ?
                            'rounded-lg bg-gray-100 shadow-sm border-r' :
                            'hover:bg-gray-100 hover:rounded-lg'}
                        `}
                      >
                        {item.icon}
                        <span
                          className={`text-[14px] transition-all 
                          ${((item.href === '' && pathname === '/admin') || (item.href !== '' && pathname.endsWith(item.href))) ?
                              'font-bold' :
                              'font-medium'}
                        `}>
                          {item.title}
                        </span>
                      </Link>
                    ) : (
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem className="text-[14px]" value="item-1">
                          <AccordionTrigger className="px-6 ">
                            <div className="flex gap-4 items-center py-2.5 ">
                              {item.icon}
                              <span className="text-[14px] font-medium">{item.title}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="pl-8 pr-2">
                              <div className="px-2 py-1 border-l-[2px]">
                                {item.sub.map((abx: any, index: number) => (
                                  <Link href={`/admin/${item.href}/${abx.href}`}
                                    className={`
                                        flex gap-2 items-center px-2 py-2.5 cursor-pointer
                                        transition-all 
                                        ${pathname.endsWith(`${item.href}/${abx.href}`) ?
                                        `rounded bg-gray-100` :
                                        `hover:bg-gray-100 hover:rounded`}
                                      `}
                                    key={index}
                                  >
                                    {abx.icon}
                                    <span className={`text-[13px] transition-all ${pathname.endsWith(`${item.href}/${abx.href}`) ? 'font-bold' : ''}`}>{abx.title}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
