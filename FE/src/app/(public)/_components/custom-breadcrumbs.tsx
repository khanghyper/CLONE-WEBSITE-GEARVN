import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CustomBreadcrumbs({ breadcrumbs }: { breadcrumbs: { name: string, slug: string }[] }) {
  const count = breadcrumbs.length;
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link href={'/'}>Trang chủ</Link>
        </BreadcrumbItem>
        {breadcrumbs.map((item, index: number) => (
          <BreadcrumbItem key={index}>
            <div className=""><ChevronRight size={14} /></div>
            <Link href={`${index === count - 1 ? '' : item.slug}`}>{item.name}</Link>
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
