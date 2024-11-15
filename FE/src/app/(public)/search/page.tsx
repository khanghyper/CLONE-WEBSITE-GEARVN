import ProductCard from "@/app/(public)/_components/product-card";
import RowProduct, { Product } from "@/app/(public)/_components/row-product";

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const products: Product[] = await fetch(`http://localhost:4014/api/v1/product/search/${searchParams?.search}`).then(res => res.json());


  return <>
    <div className="bg-body py-5">
      <div className="w-content mx-auto my-0 px-[10px]">
        <div className="w-full h-full bg-secondary rounded-[0.15rem]">
          <div className="section-heading py-3 pl-6 pr-7 flex justify-between">
            <div className="box-left flex items-center text-[20px] ">
              Kết quả tìm kiếm cho từ khóa: {searchParams.search}
            </div>
          </div>
          <div className="section-content px-[6px] pt-2">
            <div className="w-full h-full">
              <div className="section-content px-[6px] pt-2">
                <div className="w-full h-full">
                  <div className="list w-full h-full grid grid-cols-5">
                    {products?.map((item: Product, index: number) => (
                      <ProductCard {...item} key={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Section/>
      <SectionBanner/>
      <Section/>
      <Section/>
      <Sectiontegory/>
      <SectionPagelist/>
      <SectionBlogsList/> */}
    </div>
  </>
}
