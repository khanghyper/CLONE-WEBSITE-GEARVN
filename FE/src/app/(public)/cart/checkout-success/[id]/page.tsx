import SectionStep from "@/app/(public)/cart/_components/section-step";
import Link from "next/link";

export default function SuccessOrderPage({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="py-[30px]">
        <div className="cart-main bg-white rounded-sm">
          <SectionStep />
          <section className="px-16 py-6">
            <div className="p-[14px] mb-6 flex items-center justify-center bg-[#D5F7E0] rounded">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.125 5.8H16.25C16.25 3.7005 14.5719 2 12.5 2C10.4281 2 8.75 3.7005 8.75 5.8H6.875C5.84375 5.8 5 6.655 5 7.7V19.1C5 20.145 5.84375 21 6.875 21H18.125C19.1562 21 20 20.145 20 19.1V7.7C20 6.655 19.1562 5.8 18.125 5.8ZM10.625 9.6C10.625 10.1225 10.2031 10.55 9.6875 10.55C9.17188 10.55 8.75 10.1225 8.75 9.6V7.7H10.625V9.6ZM12.5 3.9C13.5312 3.9 14.375 4.755 14.375 5.8H10.625C10.625 4.755 11.4688 3.9 12.5 3.9ZM16.25 9.6C16.25 10.1225 15.8281 10.55 15.3125 10.55C14.7969 10.55 14.375 10.1225 14.375 9.6V7.7H16.25V9.6Z" fill="#1E9800"></path>
                <path d="M10.954 19L8.70926 16.8743C8.32395 16.5095 8.32395 15.8959 8.70926 15.5311V15.5311C9.06636 15.1929 9.62564 15.1933 9.98224 15.532L10.954 16.455L15.0175 12.6032C15.3743 12.2649 15.9334 12.2648 16.2904 12.6028V12.6028C16.6759 12.9679 16.6759 13.5817 16.2904 13.9467L10.954 19Z" fill="white"></path>
              </svg>
              <h1 className="ml-1 text-[#1E9800] text-[18px] font-semibold">Đặt hàng thành công</h1>
            </div>
            <div>
              <p className="mb-6">
                Cảm ơn quý khách đã cho GEARVN có cơ hội được phục vụ.
                Nhân viên GEARVN sẽ liên hệ với quý khách trong thời gian sớm nhất.
              </p>
            </div>
            <div className="bg-[#ececec] rounded mb-6">
              <div className="flex justify-between p-4 text-[16px] font-normal relative
                after:contents-[''] after:w-[440px] after:h-[1px] after:bg-[#cecece] after:bottom-0 after:absolute
              ">
                <h2>ĐƠN HÀNG<strong>  #{params.id}</strong></h2>
              </div>
              <div className="p-4">
                <div>

                </div>
                <div className="mt-4">
                  <span>
                    <span className="bg-[#FFF6ED] border border-dashed border-[#FF7A00] text-[#FF7A00] p-3 text-center block rounded">Đơn hàng chưa được thanh toán</span>
                  </span>
                </div>
              </div>
            </div>
            <div>
              <a href="#" className="p-3 text-[18px] border-[1.2px] border-[#1982f9] text-[#1982f9] font-semibold text-center block rounded hover:text-white hover:bg-[#1982f9] transition-all">Chat với GEARVN</a>
              <Link href="/" className="p-3 mt-4 text-[18px] border-[1.2px] border-[#1982f9] text-[#1982f9] font-semibold text-center block rounded hover:text-white hover:bg-[#1982f9] transition-all">Tiếp tục mua hàng</Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
