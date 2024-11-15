'use client'

import { ChevronDownIcon } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useFiltersStore } from "@/app/(public)/products/context/filtersStore";
import { useState } from "react";

type FilterUnitProps = {
  title: string;
  values: string[]
}

export default function FilterUnit({title, values}: FilterUnitProps) {
  const addFilter = useFiltersStore(state => state.addFilter);
  const checkFilter = useFiltersStore(state => state.checkFilter);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [filterSelected, setFilterSelected] = useState<string>('')

  return (
    <Popover open={isOpenModal} onOpenChange={() => setIsOpenModal(!isOpenModal)}>
      <PopoverTrigger asChild>
        <div className={`py-1 pl-2.5 pr-7 rounded-sm 
              border text-[14px] cursor-pointer ${isOpenModal ? 'border-[#1982F9]': ''} 
              ${checkFilter(filterSelected) ? 'text-[#1982F9] border-[#1982F9]': ''}
              relative`}>
          {title}
          <ChevronDownIcon size={14} strokeWidth={2} className="absolute top-2 right-1.5" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[528px] px-4 pt-4 absolute left-[-160px]">
        <div>
        <ul className="flex flex-wrap gap-2 text-[14px] font-normal">
            {values.map((item, index) => (
              <li
                key={index} onClick={() => {
                  setFilterSelected(item);
                  addFilter(title, item);
                }} className={`px-2.5 py-[7px] border rounded-sm cursor-pointer
                  ${checkFilter(item) ? 'border-[#1982F9] text-[#1982F9] font-semibold' : ''}
                `}>{item}</li>
            ))}
          </ul>
          <div className="px-2.5 py-2">
            <div className="flex gap-2 justify-center pt-2">
              {/* <span className="w-[140px] flex items-center justify-center border h-[34px] text-[14px] cursor-pointer">Bỏ chọn</span>
                              <span className="w-[140px] flex items-center justify-center border h-[34px] text-[14px]">Xem kết quả</span> */}
              <button className="text-[14px] w-[140px] h-[34px] text-[#E30019] rounded-sm border-[#E30019] border outline-none">Bỏ chọn</button>
              <button className={`text-[14px] w-[140px] h-[34px] text-[white] bg-[#2485f6] rounded-sm border-[#2485f6] border outline-none cursor-default`}>Xem kết quả</button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
