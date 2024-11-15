import AdminProvider from "@/app/(private)/admin/admin-provider";
import Footer from "@/app/(public)/_components/footer";
import Header from "@/app/(public)/_components/header";
import { auth } from "@/auth";
import Providers from "@/redux/Provider";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Cửa hàng thời trang ABC  ",
  description: "Mua quần áo thời trang nam đẹp, trẻ trung, đồ trang phục công sở chất lượng, thiết kế mới, thoải mái từ thương hiệu UNIQLO với nhiều kiểu dáng cùng chất lượng ",
};

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  if (session) {
    const accessToken = (session as any).user.accessToken;
    return <AdminProvider initialAccessToken={accessToken}>
      <Providers>
        <Header />
        {children}
        <Footer />
      </Providers>
    </AdminProvider>;
  } else {
    return <>
      <Providers>
        <Header />
        {children}
        <Footer />
      </Providers>
    </>;
  }

}