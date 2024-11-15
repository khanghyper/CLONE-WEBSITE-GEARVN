import ProductCard from "@/app/(public)/_components/product-card";
import RowProduct from "@/app/(public)/_components/row-product";
import { CpuIcon, FolderKanbanIcon, HardDriveIcon, MemoryStickIcon, SquareKanbanIcon, StarIcon, TruckIcon } from "lucide-react";

export type SectionProps = {
  name: string
  path: string
}

export default function Section(props: SectionProps) {
    return (
        <div className="w-content mx-auto my-0 px-[10px] pb-4">
            <div className="w-full h-full bg-secondary rounded-[0.15rem]">
                <div className="section-heading py-3 pl-6 pr-7 flex justify-between">
                    <div className="box-left flex items-center">
                        <div className="box-header">
                            <a href="#" className="font-medium text-[24px]">{props.name}</a>
                        </div>
                        <div className="box-subheader">
                            <div className="pl-5 ml-5 border-black border-l-[1px] flex gap-2 font-medium">
                                <TruckIcon size={20} strokeWidth={1} color="red"/>
                                Trả góp 0%
                            </div>
                        </div>
                    </div>
                    {/* <div className="box-right flex gap-5">
                        <div className="box-cate">
                            <ul className="flex h-full items-center">
                                <li>
                                    <a href="#" className="py-[5px] px-4 text-[18px] transition-all hover:underline hover:text-[red]">PC I3</a>
                                </li>
                                <li>
                                    <a href="#" className="py-[5px] px-4 text-[18px] transition-all hover:underline hover:text-[red]">PC I3</a>
                                </li>
                                <li>
                                    <a href="#" className="py-[5px] px-4 text-[18px] transition-all hover:underline hover:text-[red]">PC I3</a>
                                </li>
                                <li>
                                    <a href="#" className="py-[5px] px-4 text-[18px] transition-all hover:underline hover:text-[red]">PC I3</a>
                                </li>
                                <li>
                                    <a href="#" className="py-[5px] px-4 text-[18px] transition-all hover:underline hover:text-[red]">PC I3</a>
                                </li>
                                <li>
                                    <a href="#" className="py-[5px] px-4 text-[18px] transition-all hover:underline hover:text-[red]">PC I3</a>
                                </li>
                            </ul>
                        </div>
                        <div className="box-link h-full flex items-center">
                            <a href="#" className="text-[#1982F9] text-[18px] transition-all hover:text-[red]">Xem tất cả</a>
                        </div>
                    </div> */}
                </div>
                <div className="section-content px-[6px] pt-2">
                    <div className="w-full h-full">
                        <RowProduct path={props.path}/>
                    </div>
                </div>
            </div>
        </div>
    )
}