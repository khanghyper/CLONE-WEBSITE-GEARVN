import accountApiRequest from "@/apiRequest/account";
import authApiRequest from "@/apiRequest/auth";
import AdminHeader from "@/app/(private)/admin/_components/admin-header";
import AdminSidebar from "@/app/(private)/admin/_components/admin-sidebar";
import AdminProvider from "@/app/(private)/admin/admin-provider";
import { auth } from "@/auth";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation'



export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();


  if (session) {
    const accessToken = (session as any).user.accessToken;
    return <AdminProvider initialAccessToken={accessToken}>
      <div className="w-full">
        <div className="w-full flex">
          <div className="sidebar w-[250px] relative">
            <AdminSidebar />
          </div>
          <div className="w-[calc(100%-250px)] relative">
            <AdminHeader />
            <div className="bg-[#f3f6f9] z-10">
              {children}
            </div>
          </div>
        </div>
      </div>
    </AdminProvider>;
  } else {
    return null
  }


}