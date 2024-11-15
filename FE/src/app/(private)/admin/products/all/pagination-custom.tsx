'use client'
import { useAllProductContext } from "@/app/(private)/admin/products/all/all-products-provider";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { changeFilter, getProductList, getProductListWithSearch, selectAllProducts } from "@/redux/slices/product.slice";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { IFilter } from "@/types/product";

const searchParamsTransform = (payload: IFilter): string => {
  let text: string[] = [];
  for (let key in payload) {
    if (payload[key as keyof IFilter]) {
      text.push(`${key}=${payload[key as keyof IFilter]}`)
    }
  }
  return text.join('&')
}

export default function PaginationCustom({ pageSize }: { pageSize: number }) {
  let pageNums = pageSize ? Array.from({ length: pageSize }, (_, i) => i + 1) : [];

  const pagingInfo = useAppSelector((state: RootState) => state.product.pagingInfo);
  const productListIdSelected = useAppSelector((state: RootState) => state.product.productListIdSelected);
  const searchString = useAppSelector((state: RootState) => state.product.searchString);
  const filter = useAppSelector((state: RootState) => state.product.filter);
  const filterString = searchParamsTransform(filter);
  const dispatch = useAppDispatch();

  const handleChangePage = (pageNum: number) => {
    window.scrollTo(0, 0)
    dispatch(changeFilter({ page: pageNum }));
    dispatch(selectAllProducts([]));
  }

  return (
    <Pagination className="justify-end mx-0 w-auto">
      <PaginationContent>
        {pagingInfo.previousPage ? (
          <PaginationItem >
            <PaginationPrevious onClick={() => handleChangePage(pagingInfo.previousPage as number)} />
          </PaginationItem>
        ) : ""}
        {pageNums.map(item => (
          <PaginationItem key={item}>
            <PaginationLink
              isActive={item === pagingInfo.currentPage}
              onClick={() => {
                handleChangePage(item)
              }}
              className="cursor-pointer"
            >
              {item}
            </PaginationLink>
          </PaginationItem>
        ))}
        {pagingInfo.nextPage && pageSize !== 1 ? (
          <PaginationItem >
            <PaginationNext onClick={() => handleChangePage(pagingInfo.nextPage as number)} />
          </PaginationItem>
        ) : ""}
      </PaginationContent>
    </Pagination>
  )
}

{/* <PaginationItem>
<PaginationLink href="#">1</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#" isActive>
  2
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#">3</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationEllipsis />
</PaginationItem> */}
