import AllProductsProvider from "@/app/(private)/admin/products/all/all-products-provider"
import DataTableV2 from "@/app/(private)/admin/products/all/data-table-v2"
import StoreProvider from "@/redux/Provider"


export default async function AdminAllProductsPage({ searchParams }: { searchParams: any }) {

  return (
    <div className="size-full">
      <div className="pl-3 pr-4 ">
        <div className="bg-white shadow rounded ">
          {/* <DataTable columns={columns} data={productsRes.data} /> */}

          <StoreProvider>
            <DataTableV2 />
          </StoreProvider>
        </div>
      </div>
    </div>
  )

}

