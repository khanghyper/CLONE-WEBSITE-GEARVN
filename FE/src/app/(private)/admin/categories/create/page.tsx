'use client'
import PageBlock from "@/app/(private)/admin/_components/page-block";
import PageHeader from "@/app/(private)/admin/_components/page-header";
import FormCreateCategory from "@/app/(private)/admin/categories/create/form-create-category";


export default function CreatCategoryPage() {

  return (
    <>
      <PageBlock>
        <PageHeader headerTitle={'Thêm mới danh mục'} />
        <FormCreateCategory />
      </PageBlock>
    </>
  );
};