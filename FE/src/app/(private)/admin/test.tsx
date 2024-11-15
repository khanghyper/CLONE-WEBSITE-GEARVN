'use client'

import accountApiRequest from "@/apiRequest/account";
import authApiRequest from "@/apiRequest/auth";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { accessTokenServices, clientAccessToken, HttpError } from "@/lib/http";
import { cookies } from "next/headers";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signOut } from 'next-auth/react'

export default function Test() {
  const [user, setUser] = useState<any>();
  const router = useRouter();


  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await accountApiRequest.me();
        setUser(res.payload.data.name)
      } catch (error) {
        if (error instanceof HttpError) {
          console.log(error.payload.message);
        }
      }
    }
    getProfile();
  }, [])

  const handleLogout = async () => {
    router.push('/')
    await signOut({ callbackUrl: '/' })
  }
  return (
    <>
      <div>test {user}</div>
      <Button onClick={handleLogout} type="button">logout</Button>
    </>
  )
}
