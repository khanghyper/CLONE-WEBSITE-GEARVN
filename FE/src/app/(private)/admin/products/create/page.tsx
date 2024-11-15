import FormCreateProduct from "@/app/(private)/admin/products/create/form-create-product";
import FormCreateProductTest from "@/app/(private)/admin/products/create/form-create-product-test";

export default function CreateProductPage() {

  const testMode = process.env.NEXT_PUBLIC_TEST_MODE;


  return <>
    {testMode && testMode === 'true'
      ? <FormCreateProductTest />
      : <FormCreateProduct />}
  </>

}
