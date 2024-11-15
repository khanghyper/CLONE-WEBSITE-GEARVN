'use client'

import authApiRequest from "@/apiRequest/auth"
import { useRouter } from "next/navigation";

export default function BtnLogout() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await authApiRequest.logoutFromNextClientToNextServer();
      router.push('/auth/login')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div onClick={handleLogout} className="hover:underline mt-5 cursor-pointer">logout</div>
  )
}
