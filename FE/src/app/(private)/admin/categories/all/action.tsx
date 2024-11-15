'use client'

import { DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import envConfig from "@/config"
import { useRouter } from "next/navigation"

export default function Action({ id }: { id: string }) {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/api/v1/categories/${id}`, {
        method: 'DELETE'
      });
      window.location.href = '/admin/categories/all'
    } catch (error) {

    }


  }

  const handleNavigateToDetailCategoryPage = (id: string) => {
    router.push(`/admin/categories/detail/${id}`)
  }

  return (
    <DropdownMenuContent align="end">
      <DropdownMenuItem onClick={() => handleNavigateToDetailCategoryPage(id)} >Chi tiết danh mục</DropdownMenuItem>
      <DropdownMenuItem onClick={() => handleDelete(id)}>Xóa danh mục</DropdownMenuItem>
    </DropdownMenuContent>
  )
}
