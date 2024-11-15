
import FormCreateProductTestCopy from "@/app/(private)/admin/products/detail/[id]/form-create-product-test"

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const productRes = await fetch(`http://localhost:3210/api/v1/product-test/${params.id}`, { cache: 'no-cache' })
    .then(res => res.json())


  return <FormCreateProductTestCopy data={productRes.data} />
}
