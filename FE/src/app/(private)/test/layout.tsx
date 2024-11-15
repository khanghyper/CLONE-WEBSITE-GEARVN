import PrivateProviders from "@/redux/privateProvider";
import { cookies } from "next/headers";
import Link from "next/link";
import { Input } from "@/components/ui/input"

export default async function TestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return <>
    <div className="flex px-10 py-3 items-center justify-between">
      <div className="flex gap-4">
        <Link href={'/test'}>Trang chủ</Link>
        <Link href={'/test/about'}>Giới thiệu</Link>
      </div>
      <Link href={'test/add'}>Thêm sản phẩm</Link>
    </div>

    {children}
  </>;
}