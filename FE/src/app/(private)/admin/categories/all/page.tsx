import PageBlock from "@/app/(private)/admin/_components/page-block"
import PageHeader from "@/app/(private)/admin/_components/page-header"
import { CategoriesTable } from "@/app/(private)/admin/categories/all/categories-table"


export default async function AllCategories() {

  return (
    <PageBlock>
      <PageHeader headerTitle="Danh sách danh mục" />
      <CategoriesTable />
    </PageBlock>
  )
}
