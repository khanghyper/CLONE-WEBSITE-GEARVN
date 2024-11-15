import PageHeader from "@/app/(private)/admin/_components/page-header";
import CreateProductForm from "@/app/(private)/admin/test/create-product-form";

export default function TestPage() {
  return (
    <>
      <div className="px-3 py-4">
        <PageHeader headerTitle={'Thêm sản phẩm'} />
        <div className='min-h-screen mt-4'>
          <CreateProductForm />
        </div>
      </div>
    </>
  );
};