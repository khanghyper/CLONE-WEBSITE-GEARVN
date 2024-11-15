

import { ChevronRightIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import './style.css';
import navLinks from "@/app/(public)/_components/nav-links";
import Section from "@/app/(public)/_components/section";
import SectionBanner from "@/app/(public)/_components/section-banner";
import Sectiontegory from "@/app/(public)/_components/section-categories";
import SectionPagelist from "@/app/(public)/_components/section-pagelist";
import SectionBlogsList from "@/app/(public)/_components/section-blogslist";
import Sidebar from "@/app/(public)/_components/sidebar";




export const bannerImgs2: string[] = [
  'https://file.hstatic.net/200000722513/file/layout_pc_thang_4-01_e70ec813060a45bea4d727cbd697ea2b.png',
  'https://file.hstatic.net/200000722513/file/loa_hay_0504e9a89e22414a97db4962ebb0c03c.png',
  'https://file.hstatic.net/200000722513/file/layout_van_phong_thang_4-05_8c3fddea7ee14f1f8b1093ffe4af0c9e.png',
  'https://file.hstatic.net/200000722513/file/layout_laptop_gaming_thang_4-04_ceeea2813177449fa54c3f6f058c38b4.png',
  'https://file.hstatic.net/200000722513/file/layout_pc_gaming_i5_thang_4-03_0d6f709b433848118abd6f328e70b687.png'
]
const banner1Imgs: string[] = [
  ''
]

const abx = [
  {
    name: 'Sản phẩm khuyến mãi',
    path: '&promotion=true'
  },
  {
    name: 'Sản phẩm bán chạy',
    path: ''
  },
  {
    name: 'Áo',
    path: '&categoryId=66043feb43b7b1d248cc2817'
  }, {
    name: 'Phụ kiện',
    path: '&categoryId=66043feb43b7b1d248cc2819'
  }
]

// const css = {
//   background:
// }

export default function Home() {
  // const [hidden, setHidden] = useState<boolean>(false);
  // const [selectNavLink, setSelectNavLink] = useState<number | null>(null);

  return <>
    <div className="bg-body">
      <div className="w-content mx-auto my-0 px-[10px]">
        <Sidebar />
      </div>
    </div>
  </>

}
