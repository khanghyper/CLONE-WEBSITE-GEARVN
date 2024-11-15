'use client'

import FilterUnit from "@/app/(public)/products/_components/filter-unit";
import { useFiltersStore } from "@/app/(public)/products/context/filtersStore";

export default function FilterSingleBlock() {
  const filters = useFiltersStore(state => state.filters);

  return (
    <div className= "filter-single">
      <div className="filter-single-main flex flex-wrap gap-2" >
        {filters.map((item, index) => (
          <FilterUnit key={index} title={item.title} values={item.values}/>
        ))}
      </div>
    </div>
  )
}
