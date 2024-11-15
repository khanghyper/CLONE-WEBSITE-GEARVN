'use client'
import { Button } from "@/components/ui/button";
import { clientAccessToken } from "@/lib/http";
import { signOut } from 'next-auth/react'
import { useRouter } from "next/navigation";


export default function BtnLogout() {
  const router = useRouter();
  const handleLogout = async () => {
    clientAccessToken.value = ''
    // router.push('/')
    await signOut({ callbackUrl: '/' })
  }
  return (
    <Button onClick={handleLogout} type="button">logout</Button>
  )
}
