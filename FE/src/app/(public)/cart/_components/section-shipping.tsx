
function SectionShipping() {
  return (
    <section className='section-info-shipping pt-2 px-6 pb-6'>
      <div>
        <div className="pb-2">
          <span className="text-[18px] font-semibold">Dịch vụ giao hàng</span>
        </div>
        <div>
          <div className="">
            <div className="mt-2 gap-2 w-full flex items-center">
              <div className="flex"><input type="radio" /></div>
              <div className="flex w-full justify-between">
                <div className="text-[16px]">Miễn phí vận chuyển (Giao hàng tiêu chuẩn)</div>
                <div className="text-[16px]">0đ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionShipping