import categoryApiRequest from "@/apiRequest/category"
import CustomBreadcrumbs from "@/app/(public)/_components/custom-breadcrumbs";
import { Button } from "@/components/ui/button";
import { filter, navLinks } from "@/constants/navlinks";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import productApiRequest from "@/apiRequest/product";
import ProductCard from "@/app/(public)/_components/product-card";
import FilterCollection from "@/app/(public)/_components/filter-collection";
import FilterProductBlock from "@/app/(public)/_components/filter-product-block";

export default async function CollectionDetailPage({ params }: { params: { slug: string } }) {
  const category = navLinks.find(item => item.slug === params.slug);

  let aliasSlug = params.slug as 'laptop' | 'pc'
  const filter1 = filter[aliasSlug];


  return (
    <div className="w-full flex justify-center bg-body py-4">
      <div className="w-content">
        <CustomBreadcrumbs breadcrumbs={[{ name: category?.name as string, slug: category?.slug as string }]} />
        <div className="py-3">
          <div><img className="rounded-sm" src={category?.img} alt="" /></div>
        </div>
        <FilterCollection filter={filter1} />
        <FilterProductBlock kind={params.slug} />
      </div>
    </div>
  )
}
