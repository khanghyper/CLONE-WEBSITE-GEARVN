
import accountApiRequest from "@/apiRequest/account";
import BtnLogout from "@/app/(private)/admin/btn-logout";
import Profile from "@/app/(private)/admin/profile";
import Test from "@/app/(private)/admin/test";
import { auth } from "@/auth";
import { cookies } from "next/headers"
import { redirect } from 'next/navigation'

const PrivatePage = async () => {
  const session = await auth();

  if (session) {
    const user = (session as any).user;
    return <div>
      <div>Hello, {user.name}</div>
      <Test />
    </div>
  } else {
    return <div>
      <div>Fail in fetch</div>
      <Test />
    </div>
  }



}

export default PrivatePage