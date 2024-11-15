'use client'

import accountApiRequest from "@/apiRequest/account"
import { clientAccessToken } from "@/lib/http"
import Link from "next/link"
import { useEffect } from "react"

export default function Profile() {

  useEffect(() => {
    const fetchReqest = async () => {
      try {
        const result = await accountApiRequest.me();
      } catch (error) {
        console.log(error);
      }
    }
    fetchReqest()
  }, [clientAccessToken])

  return (
    <div>
      <div>profile</div>
      <div className="flex gap-2">
        <Link href={'/auth/login'}>login</Link>
        <Link href={'/auth/register'}>register</Link>
      </div>
    </div>
  )
}
