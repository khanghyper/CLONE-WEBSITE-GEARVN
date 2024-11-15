'use client'

import { useRouter } from "next/navigation"

export default function Test() {
  const router = useRouter();
  return (
    <button onClick={() => {
      router.push('/admin/products/all?page=2')
    }}>test</button>
  )
}
