// 'use client'

import { auth } from "@/auth";
import { useSession } from "next-auth/react"

export default async function AdminHeader() {
  // const { data: session, status } = useSession()
  const session = await auth()
  let name = (session?.user as any)?.name;
  return (
    <div className="w-full sticky top-0 z-20">
      <div className="w-full h-[70px] bg-white border-y flex justify-between items-center">
        <div>header</div>
        <div>Xin chao, {name ? name : 'not found'}</div>
      </div>
    </div>
  )
}
