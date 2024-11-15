import { Product } from "@/app/(public)/_components/row-product";
import { CpuIcon, FolderKanbanIcon, HardDriveIcon, MemoryStickIcon, SquareKanbanIcon, StarIcon, TruckIcon } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


type ProductProp = {
  _id: string,
  name: string,
  slug: string,
  price: number,
  images: any,
  category: any,
  description: string,
  discount: string,
  inventory: 100,
  status: 'ACTIVE' | 'INACTIVE',
}

export const formatCurrentcy = (price: number) => {

  let cal = Math.round(price / 10000) * 10000;
  return cal.toLocaleString('vi', { style: 'currency', currency: 'VND' })
}

export const handleNameInProductCard = (str: string) => {
  if (str.length > 40) {
    return str.slice(0, 40) + '...'
  }
  return str;
}

export default function ProductCard(productProp: any) {

  return <>
    <div className="px-1 mb-2">
      <div className="w-full h-full border rounded-[4px]">
        <div className="pro-img p-[10px]">
          <div className="w-full h-6 pb-[10px]"></div>
          <Link href={`/products/${productProp.slug}`} className="block w-full h-full">
            <img className="w-full h-full object-cover" src={productProp.thumbnail} alt="" />
          </Link>
        </div>
        <div className="pro-detail px-4 pt-[6px] pb-4">
          <div className="w-full h-6 pb-[10px]"></div>
          <div className="pro-name mb-[10px]">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="#" className="font-semibold text-[14px]">{handleNameInProductCard(productProp.name)}</a>
                </TooltipTrigger>
                <TooltipContent className="bg-white border text-black">
                  <p>{productProp.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

          </div>
          {/* <div className="pro-technical mb-2 bg-[#ECECEC] text-[#6D6E72] rounded-[2px] px-2 py-1 flex flex-wrap">
            <div className="pro-tecnical--line flex items-center mr-[10px]">
              <CpuIcon size={10} className="mr-[5px]" strokeWidth={2} />
              <span className="text-[12px]">i5 12400F</span>
            </div>
            <div className="pro-tecnical--line flex items-center mr-[10px]">
              <FolderKanbanIcon size={10} className="mr-[5px]" strokeWidth={2} />
              <span className="text-[12px]">GTX 1650</span>
            </div>
            <div className="pro-tecnical--line flex items-center mr-[10px]">
              <SquareKanbanIcon size={10} className="mr-[5px]" strokeWidth={2} />
              <span className="text-[12px]">B769</span>
            </div>
            <div className="pro-tecnical--line flex items-center mr-[10px]">
              <MemoryStickIcon size={10} className="mr-[5px]" strokeWidth={2} />
              <span className="text-[12px]">8GB</span>
            </div>
            <div className="pro-tecnical--line flex items-center mr-[10px]">
              <HardDriveIcon size={10} className="mr-[5px]" strokeWidth={2} />
              <span className="text-[12px]">500GB</span>
            </div>
          </div> */}
          <div className="pro-price mb-2">
            <div className="pro-price--compare">
              {productProp?.priceSale ? (
                <del className="text-[13px] text-gray-500">{formatCurrentcy(productProp.price)}</del>
              ) : ''}

            </div>
            <div className="pro-price--default flex items-center">
              {productProp?.priceSale ? (
                <span className="text-[red] font-semibold text-[16px]">{formatCurrentcy(productProp.priceSale)}</span>
              ) : (
                <span className="text-[red] font-semibold text-[16px]">{formatCurrentcy(productProp.price)}</span>
              )}
              {productProp?.priceSale ? (
                <span className="inline-block h-5 pro-label--on-sale border-[0.8px] border-[#E30019] px-2 ml-[10px] text-[#E30019] bg-[#FFEDED] rounded-[2px] text-[12px]">-{productProp.promotionPercentText}</span>
              ) : ''}
            </div>
          </div>
          <div className="pro-rating flex items-center">
            <span className="text-[#FF8A00] font-semibold text-[12px]">0.0</span>
            <span className="ml-[2px] mr-2">
              <StarIcon size={12} color="#FF8A00" strokeWidth={1} />
            </span>
            <span className="text-[12px] text-[#6D6E72]">(0 đánh giá)</span>
          </div>
        </div>
      </div>
    </div>
  </>
}

// const ProductCard = () => {
//   return (
//       <div className="px-1 mb-2">
//           <div className="w-full h-full border rounded-[4px]">
//               <div className="pro-img p-[10px]">
//                   <div className="w-full h-6 pb-[10px]"></div>
//                   <a href="#" className="block w-full h-full">
//                       <img className="w-full h-full object-cover" src="https://product.hstatic.net/200000722513/product/gvn07935__1__b4e73cc09d874d258d09c22cf7520754_medium.png" alt="" />
//                   </a>
//               </div>
//               <div className="pro-detail px-4 pt-[6px] pb-4">
//                   <div className="w-full h-6 pb-[10px]"></div>
//                   <div className="pro-name mb-[10px]">
//                       <a href="#" className="font-semibold text-[14px]">PC GVN Intel i5-12400F/ VGA GTX 1650</a>
//                   </div>
//                   <div className="pro-technical mb-2 bg-[#ECECEC] text-[#6D6E72] rounded-[2px] px-2 py-1 flex flex-wrap">
//                       <div className="pro-tecnical--line flex items-center mr-[10px]">
//                           <CpuIcon size={10} className="mr-[5px]" strokeWidth={2} />
//                           <span className="text-[12px]">i5 12400F</span>
//                       </div>
//                       <div className="pro-tecnical--line flex items-center mr-[10px]">
//                           <FolderKanbanIcon size={10} className="mr-[5px]" strokeWidth={2} />
//                           <span className="text-[12px]">GTX 1650</span>
//                       </div>
//                       <div className="pro-tecnical--line flex items-center mr-[10px]">
//                           <SquareKanbanIcon size={10} className="mr-[5px]" strokeWidth={2} />
//                           <span className="text-[12px]">B769</span>
//                       </div>
//                       <div className="pro-tecnical--line flex items-center mr-[10px]">
//                           <MemoryStickIcon size={10} className="mr-[5px]" strokeWidth={2} />
//                           <span className="text-[12px]">8GB</span>
//                       </div>
//                       <div className="pro-tecnical--line flex items-center mr-[10px]">
//                           <HardDriveIcon size={10} className="mr-[5px]" strokeWidth={2} />
//                           <span className="text-[12px]">500GB</span>
//                       </div>
//                   </div>
//                   <div className="pro-price mb-2">
//                       <div className="pro-price--compare">
//                           <del className="text-[13px] text-gray-500">16.280.000đ</del>
//                       </div>
//                       <div className="pro-price--default flex items-center">
//                           <span className="text-[red] font-semibold text-[16px]">15.280.000đ</span>
//                           <span className="inline-block h-5 pro-label--on-sale border-[0.8px] border-[#E30019] px-2 ml-[10px] text-[#E30019] bg-[#FFEDED] rounded-[2px] text-[12px]">-5%</span>
//                       </div>
//                   </div>
//                   <div className="pro-rating flex items-center">
//                       <span className="text-[#FF8A00] font-semibold text-[12px]">0.0</span>
//                       <span className="ml-[2px] mr-2">
//                           <StarIcon size={12} color="#FF8A00" strokeWidth={1} />
//                       </span>
//                       <span className="text-[12px] text-[#6D6E72]">(0 đánh giá)</span>
//                   </div>
//               </div>
//           </div>
//       </div>
//   )
// }