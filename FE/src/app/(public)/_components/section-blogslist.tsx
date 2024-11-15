const blogsList:{
    title: string;
    img: string
}[] = [
    {
        title: 'Bỏ túi các bước đổi tên TikTok trên điện thoại, máy tính cực đơn giản.',
        img: 'https://file.hstatic.net/200000722513/article/high-angle-hands-holding-smartphones_583ca293703341058bcfbc9f605a52f9_grande.jpg'
    },{
        title: 'Cách lấy nhạc Tiktok không bản quyền làm nhạc chuông iphone',
        img: 'https://file.hstatic.net/200000722513/article/15_6552f3c0e4bc43b8a8641d2191833d05_grande.jpg',

    },
    {
        img: 'https://file.hstatic.net/200000722513/article/standard-quality-control-concept-m_10a3dda95fdd42b1b33b9c635ab6a3ed_grande.jpg',
        title: 'Cách thay đổi mật khẩu trên máy tính Windows 11 nhanh chóng, đơn giản.'
    },{
        img: 'https://file.hstatic.net/200000722513/article/9_77ea2c8c1e304df3aaeb9f893c26f583_grande.png',
        title: 'Top 4 cách đơn giản và hiệu quả tải phim về máy tính'
    }
]


const SectionBlogsList = () => {
  return (
    <div className="w-content mx-auto my-0 px-[10px] mb-4">
            <div className="w-full h-full bg-secondary rounded-[0.15rem]">
                <div className="section-heading py-3 pl-6 pr-7 flex justify-between">
                    <div className="box-left flex items-center">
                        <div className="box-header">
                            <a href="#" className="font-medium text-[24px]">Tin tức công nghệ</a>
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
                            {blogsList.map((item, index: number) => (
                            <div key={index} className="px-2">
                                <div className="">
                                    <a href="#" className="w-[280x] h-[143px] block">
                                        <img className="size-full object-cover rounded" src={item.img} alt="" />
                                    </a>
                                </div>
                                <div className="mt-2">
                                    <a className="hover:text-[red] transition-all" href="#">{item.title}</a>
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

export default SectionBlogsList