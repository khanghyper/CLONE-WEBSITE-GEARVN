import productApiRequest from "@/apiRequest/product"
import AttributesTable from "@/app/(public)/_components/attributes-table"
import CustomBreadcrumbs from "@/app/(public)/_components/custom-breadcrumbs"
import ProductDetailDescription from "@/app/(public)/_components/product-detail-description"
import ProductDetail from "@/app/(public)/products/[slug]/product-detail"

import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug

  // fetch data
  const res = await productApiRequest.getBySlug(slug)

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: res.payload.data.metaTitle,
    description: res.payload.data.metaDescription,
    keywords: res.payload.data.metaKeyword
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  }
}

export default async function ProductDetailPage({ params: { slug } }: { params: { slug: string } }) {

  const res = await productApiRequest.getBySlug(slug);

  return (
    <>
      <div className="bg-body py-5">
        <div className="w-content mx-auto my-0 px-[10px]">
          <CustomBreadcrumbs breadcrumbs={[{ name: res.payload.data.name, 'slug': '' }]} />
          <div className="w-full mt-4 h-full bg-secondary rounded-sm">
            <ProductDetail {...res.payload.data} />
          </div>
        </div>
        <div className="w-content mx-auto my-0 px-2.5">
          <div className="w-full mt-4 h-full">
            <div className="w-full flex gap-3">
              <div className="w-3/5 ">
                <div className="w-full bg-secondary rounded-sm shadow">
                  <div className="w-full  px-5 py-3 border-b">
                    <span className="font-medium text-[20px]">
                      Giới thiệu {res.payload?.data.name}
                    </span>
                  </div>
                  <ProductDetailDescription description={res.payload?.data?.description} />
                </div>
              </div>
              <div className="w-2/5 ">
                <div className="w-full bg-secondary rounded-sm shadow">
                  <div className="px-3 py-5">
                    <span className="text-[20px] font-semibold">Thông số kỹ thuật</span>
                  </div>
                  <AttributesTable attributes={res.payload?.data.attributes} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
