const listPage:string[] = [
    'https://file.hstatic.net/200000722513/file/uu_dai_soc_b6303389c3fb4f26b05bd368f3d61486.jpg',
    'https://file.hstatic.net/200000722513/file/gearvn-microsoft-365_2aa8dbe17b0941e180f6da14132d6a27.png',
    'https://file.hstatic.net/200000722513/file/man_hinh_slider_295b45dfd3ee4f3cb6a2632ab018e588.png',
    'https://file.hstatic.net/200000722513/file/gearvn-laptop-asus-vivobook-14-oled-m1405ya-km047w-slider_46dfc8f3a021418fb33af9be6052b315.png'
]


const SectionPagelist = () => {
  return (
    <div className="w-content mx-auto my-0 px-[10px] mb-4">
            <div className="w-full h-full bg-secondary rounded-[0.15rem]">
                <div className="section-heading py-3 pl-6 pr-7 flex justify-between">
                    <div className="box-left flex items-center">
                        <div className="box-header">
                            <a href="#" className="font-medium text-[24px]">Chuyên trang khuyến mãi</a>
                        </div>
                    </div>
                    <div className="box-right flex gap-5">
                        <div className="box-cate">
                        </div>
                        <div className="box-link h-full flex items-center">
                            <a href="#" className="text-[#1982F9] text-[18px] transition-all hover:text-[red]">Xem tất cả</a>
                        </div>
                    </div>
                </div>
                <div className="section-content p-2">
                    <div className="w-full h-full">
                        <div className="list w-full h-full grid grid-cols-4">
                            {listPage.map((item, index: number) => (
                            <div key={index} className="px-2">
                                <div className="size-full">
                                    <a href="#" >
                                        <img className="size-full object-cover rounded" src={item} alt="" />
                                    </a>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SectionPagelist