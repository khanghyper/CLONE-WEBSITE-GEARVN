import ProductCard from "@/app/(public)/_components/product-card"
import { TruckIcon } from "lucide-react"

const listCategory: { title: string, img: string }[] = [
    {
        title: 'Laptop',
        img: 'https://file.hstatic.net/200000636033/file/icon1_ce115f32db874a8e9b5af39517176e96.png'
    },
    {
        title: 'PC',
        img: 'https://file.hstatic.net/200000636033/file/icon3_5c59c1dc52ec4b81a94a3edba293e895.png'
    },
    {
        title: 'Màn hình',
        img: 'https://product.hstatic.net/200000722513/product/asus_pg27aqdm_gearvn_53c46bd0ca1f40f1a7abfb0246800081_e341bb95b0724bee845ba8f093678245_master.jpg'
    },
    {
        title: 'Mainboard',
        img: 'https://file.hstatic.net/200000636033/file/icon5_71200675c9e64c32a11730486ba04b32.png'
    },
    {
        title: 'CPU',
        img: 'https://file.hstatic.net/200000636033/file/icon6_056974287cd84e0d82eac05809b7e5d5.png'
    },
    {
        title: 'VGA',
        img: 'https://file.hstatic.net/200000722513/file/asus-rog-strix-rtx4090-o24g-gaming-03_c948a4c2a9cf4adcbd522319bfcd4846.jpg'
    },
    {
        title: 'RAM',
        img: 'https://file.hstatic.net/200000636033/file/icon13_708c31c3ba56430dbec3f4cc7e1b14f0.png'
    },
    {
        title: 'Ổ cứng',
        img: 'https://file.hstatic.net/200000636033/file/icon11_2f0ea4c77ae3482f906591cec8f24cea.png'
    },
    {
        title: 'Case',
        img: 'https://file.hstatic.net/200000636033/file/icon7_cdd85eba03974cb99a3941d076bf5d1b.png'
    },
    {
        title: 'Tản nhiệt',
        img: 'https://file.hstatic.net/200000636033/file/icon8_8f7b3fe2e8fb450b805857be9bb14edc.png'
    },
    {
        title: 'Nguồn',
        img: 'https://file.hstatic.net/200000636033/file/icon9_ffd172460eb24c4d8bab6a7cd9a8cc46.png'
    },
    {
        title: 'Bàn phím',
        img: 'https://file.hstatic.net/200000722513/file/ban_phim_93a4d3cefd8345dfac23829818a3c5d4.jpg'
    },
    {
        title: 'Chuột',
        img: 'https://file.hstatic.net/200000722513/file/chuot_aa348bf0177b4795a39ab66d51e62ed7.jpg'
    },
    {
        title: 'Ghế',
        img: 'https://file.hstatic.net/200000722513/file/ghe_e1ff4e3493f14aa982676b3c4574135e.jpg'
    },
    {
        title: 'Tai nghe',
        img: 'https://file.hstatic.net/200000722513/file/tai_nghe_ed3b4f52172f40929e1d3ab493099b73.jpg'
    },
    {
        title: 'Loa',
        img: 'https://file.hstatic.net/200000636033/file/icon10_bfdf42150dbf45cfbcdf990b26f59691.png'
    },
    {
        title: 'Console',
        img: 'https://file.hstatic.net/200000636033/file/icon18_720958e90b7d4fa7ae803f8f4d2fe56b.png'
    },
    {
        title: 'Phụ kiện',
        img: 'https://file.hstatic.net/200000636033/file/icon19_0197366bbf124fed9b939c9b7075c2db.png'
    },
    {
        title: 'Thiết bị VP',
        img: 'https://file.hstatic.net/200000636033/file/icon20_d17b4a1a0d884dc49a1212256531c3f2.png'
    },
    {
        title: 'Apple',
        img: 'https://file.hstatic.net/200000636033/file/icon2_0ebe9b62122949ec8005dd19d110c1ba.png'
    }
]

const Sectiontegory = () => {
    return (
        <div className="w-content mx-auto my-0 px-[10px] mb-4">
            <div className="w-full h-full bg-secondary rounded-[0.15rem]">
                <div className="section-heading py-3 pl-6 pr-7 flex justify-between">
                    <div className="box-left flex items-center">
                        <div className="box-header">
                            <a href="#" className="font-medium text-[24px]">Danh mục sản phẩm</a>
                        </div>
                    </div>
                </div>
                <div className="section-content px-[6px] pt-2 border-t">
                    <div className="w-full h-full">
                        <div className="list w-full h-full grid grid-cols-10">
                            {listCategory.map((item, index: number) => (
                                <div key={index} className="my-4 px-[18px]">
                                    <div className="size-[84px]">
                                        <a href="#">
                                            <img className="size-full p-[10px] object-cover" src={item.img} alt="" />
                                        </a>
                                    </div>
                                    <div className="text-center">{item.title}</div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sectiontegory