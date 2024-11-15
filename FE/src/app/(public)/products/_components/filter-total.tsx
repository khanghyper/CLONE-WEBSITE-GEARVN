'use client'

import Filter from "@/app/(public)/products/_components/filter";
import { useFiltersStore } from "@/app/(public)/products/context/filtersStore";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { X } from "lucide-react";
import { useCallback, useState } from "react";
import { useRouter, useSearchParams, usePathname } from 'next/navigation'




export default function FilterTotal() {
  const filters = useFiltersStore(state => state.filters);
  const filtersSelected = useFiltersStore(state => state.filtersSlected);
  const removeFitler = useFiltersStore(state => state.removeFilter);
  const removeAllFitlers = useFiltersStore(state => state.removeAllFilters);
  const [isModal, setIsModal] = useState<boolean>(false);
  const router  = useRouter();
  const pathname = usePathname();

  const filterSearchPrams = useFiltersStore(state => state.filterSearchPrams);

  return (
    <Popover open={isModal}
      onOpenChange={() => {
        if (!isModal) {
          window.scrollTo(0, 100);
        }
        setIsModal(!isModal);
      }}>
      <PopoverTrigger asChild>
        <div className="filter-total mr-2 relative">
          <div className="px-2.5 py-1 border flex items-center rounded-sm cursor-pointer">
            <svg className="w-[14px] h-[14px] mr-[9px]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5 1H1.5V3.47059L6.375 8.41176V15L9.625 12.9412V8.41176L14.5 3.47059V1Z" stroke="#111111" ></path>
            </svg>
            <span className="text-[14px]">Bộ lọc</span>
          </div>
          {false ? (
            <div className="absolute top-[-8px] right-1 bg-[#FF8A00] w-4 h-4 rounded-full text-[12px] flex justify-center items-center text-white">1</div>
          ) : ''}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[900px] max-w-[900px] h-[85vh] max-h-[85vh] absolute top-2 left-[-40px] p-0 overflow-y-scroll">
        <div className="flex px-4 py-2.5 justify-between sticky top-0 bg-white">
          <div className="" style={{
            width: 'calc(100% - 85px)'
          }}>
            <div className="flex gap-2">
              <span className="text-[13px] font-semibold">Tiêu chí đã chọn: </span>
              <div className="flex flex-wrap w-[85%]">
                {filtersSelected.map(({ title, values }, index) => (
                  <div key={index}>
                    {values.length ? (
                      <div className="relative inline-flex h-[27px] leading-[24px] border rounded-sm pl-2 pr-6 mr-2 mb-1">
                        <span className="text-[12px] font-normal">{title}: </span>
                        <p className="text-[#1982F9] pl-2 pr-1 text-[13px] font-semibold overflow-hidden">{(values as string[]).map(item => (item)).join(',')}</p>
                        <span onClick={() => removeFitler(title)} className="absolute right-0.5 bottom-1 p-1 border w-[18px] h-[18px] flex items-center justify-center bg-[#1982F9] rounded-full cursor-pointer">
                          <X size={16} color="white" />
                        </span>
                      </div>) : ''}
                  </div>
                )
                )}
                {(filtersSelected.length && filtersSelected.some(item => (item.values as string[]).length)) ? (
                  <div onClick={() => removeAllFitlers()} className="pl-2 pr-6 mb-1 mr-2">
                    <span className="border-b text-[#3966b8] text-[12px] cursor-pointer">Xóa bộ lọc</span>
                  </div>
                ) : ''}
              </div>

            </div>
          </div>
          <div className="w-[85px] h-[38px]">
            <div onClick={() => setIsModal(false)} className="px-2.5 py-2 flex gap-1 items-center border rounded-sm cursor-pointer">
              <X size={16} color="black" />
              Đóng
            </div>
          </div>
        </div>
        <div className="px-1.5 pb-4 grid grid-cols-3">
          {filters.map((item, index) => (
            <Filter key={item.title} title={item.title} values={item.values} />
          ))}
        </div>
        <div className="sticky bottom-0 bg-white">
          <div className="px-2.5 py-3">
            <div className="flex justify-center items-center gap-2">
              <span onClick={() => {
                setIsModal(false);
                removeAllFitlers();
              }} className="py-2.5 w-[140px] text-center text-[14px] bg-white text-[#E30019] border border-[#E30019] rounded-sm cursor-pointer">Bỏ chọn</span>
              <span
                onClick={() => {
                  setIsModal(false);
                  router.push(`${pathname}?${filterSearchPrams()}`)
                }}
                className="py-2.5 w-[140px] text-center text-[14px] bg-[#2485f6] text-white rounded-sm cursor-default">Xem kết quả</span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>

  )
}
