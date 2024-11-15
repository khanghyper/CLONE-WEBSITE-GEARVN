'use client'
import { formatCurrentcy } from "@/app/(public)/_components/product-card";
import { auth } from "@/auth";
import { useAppSelector } from "@/redux/store";
import { Dot } from "lucide-react";
import { useSession } from "next-auth/react";

export default function SectionInfoOrder() {
  const { data: session } = useSession();
  const totalPrice = useAppSelector(state => state.cart.totalPrice);
  if (session?.user) {
    return (
      <section className="p-6">
        <div>
          <div className="mb-2">
            <h2 className="font-semibold text-[24px]">Thông tin đặt hàng</h2>
          </div>
          <div className="w-full flex flex-col gap-4 font-medium">
            <div className="flex">
              <div className="flex w-60">
                <Dot />
                <span>Khách hàng</span>
              </div>
              <div>{(session.user as any).name}</div>
            </div>
            <div className="flex">
              <div className="flex w-60">
                <Dot />
                <span>Số điện thoại</span>
              </div>
              <div>{(session.user as any).phone}</div>
            </div>
            <div className="flex">
              <div className="flex w-60">
                <Dot />
                <span>Địa chỉ nhận hàng</span>
              </div>
              <div>{(session.user as any).address}</div>
            </div>
            <div className="flex">
              <div className="flex w-60">
                <Dot />
                <span>Tạm tính</span>
              </div>
              <div className="text-red-500">{formatCurrentcy(totalPrice)}</div>
            </div>
            <div className="flex">
              <div className="flex w-60">
                <Dot />
                <span>Phí vận chuyển</span>
              </div>
              <div className="text-red-500">Miễn phí</div>
            </div>
            <div className="flex">
              <div className="flex w-60">
                <Dot />
                <span>Tổng tiền</span>
              </div>
              <div className="text-red-500">{formatCurrentcy(totalPrice)}</div>
            </div>
          </div>
        </div>
      </section>
    )
  } else {
    return null
  }

}
