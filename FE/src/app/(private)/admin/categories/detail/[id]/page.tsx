import categoryApiRequest from "@/apiRequest/category"
import CategoryForm from "@/app/(private)/admin/categories/category-form";
import { HttpError } from "@/lib/http";

export default async function DetailCategoryPage({ params: { id } }: { params: { id: string } }) {
  try {
    const categoryRes = await categoryApiRequest.findById(id);
    return (
      <CategoryForm category={categoryRes.payload?.data} />
    )
  } catch (error) {
    if (error instanceof HttpError) {
      if (error.status === 404) {
        return <div>404 not found</div>
      } else {
        return <div>something with wrong!</div>
      }
    } else { }
  }
}
