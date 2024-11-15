
'use client'

import { useFiltersStore } from "@/app/(public)/products/context/filtersStore";

interface FilterProps {
  title: string,
  values: string[]
}

export default function Filter({ title, values }: FilterProps) {

  const addFilter = useFiltersStore(state => state.addFilter);
  const checkFilter = useFiltersStore(state => state.checkFilter);


  return (
    <div className="p-2.5 border-b">
      <div>
        <div className="mb-2">
          <span className="text-[14px] font-semibold">{title}</span>
        </div>
        <div>
          <ul className="flex flex-wrap gap-2 text-[14px] font-normal">
            {values.map((item, index) => (
              <li
                key={index} onClick={() => {
                  addFilter(title, item);
                }} className={`px-2.5 py-[7px] border rounded-sm cursor-pointer
                  ${checkFilter(item) ? 'border-[#1982F9] text-[#1982F9] font-semibold' : ''}
                `}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
