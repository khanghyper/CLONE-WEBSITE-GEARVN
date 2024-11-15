import { Input } from "@/components/ui/input";

export default async function DetailPage({ params }: { params: { id: string } }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);

  if (!res.ok) {
    return (
      <div className="p-10">
        Error
      </div>
    )
  }
  const product = await res.json();

  return (
    <>
      <div className="px-10 py-1">
        <Input type="email" placeholder="Tìm kiếm" />
      </div>
      <div className="p-10">
        <div className="font-bold text-3xl">Chi tiết sản phẩm</div>
        <div className="flex gap-10 mt-4">
          <img src={product.image} alt="" className="size-40" />
          <div>
            <div className="font-bold text-xl">{product.title}</div>
            <div>{product.description}</div>
            <div className="mt-4">
              Giá: {product.price}
            </div>
          </div>
        </div>
      </div>
    </>
  )

}
