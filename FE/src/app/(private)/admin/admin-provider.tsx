'use client'
import accountApiRequest from "@/apiRequest/account";
import { clientAccessToken } from "@/lib/http";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";


export default function AdminProvider(
  { children,
    initialAccessToken = ''
  }: {
    children: React.ReactNode,
    initialAccessToken?: string
  }
) {
  const router = useRouter();
  useState(() => {
    if (typeof window !== 'undefined') {
      clientAccessToken.value = initialAccessToken
    }
  })

  return <>
    {children}
  </>
}