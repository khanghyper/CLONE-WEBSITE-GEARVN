"use client"

import {
  ColumnDef,
  ColumnFiltersState,
  RowSelectionState,
  SortingState,
  Updater,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { useContext, useState } from "react"
import { Input } from "@/components/ui/input"
import { context, Filter, UserContextType } from "@/app/(private)/admin/categories/all/test-context"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {

  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [rowSelection, setRowSelection] = useState({})
  const { pageCount, filter, setFilter, count } = useContext(context) as UserContextType

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  })

  return (
    <div className="bg-white px-4 rounded shadow-sm">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter name..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-4 items-center">
          <div className="flex text-[13px] text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} trên{" "}
            {table.getFilteredRowModel().rows.length} danh mục được chọn.
          </div>

        </div>
        <div className="flex items-center justify-end space-x-2 mt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              if (filter.pagePrevious || filter.pagePrevious === 0) {
                setFilter(prev => ({
                  ...prev, pageIndex: prev.pagePrevious
                }))
              }
            }}
            disabled={!filter.pagePrevious && filter.pagePrevious !== 0}
          >
            Previous
          </Button>
          {
            Array.from({ length: pageCount }, (_, i) => i + 1).map(item => (
              <Button
                className={`${filter.pageIndex === item - 1 && 'bg-gray-400'}`}
                variant={'outline'}
                key={item}
                onClick={() => {
                  setFilter((prev: Filter) => {
                    return { ...prev, pageIndex: item - 1 }
                  })
                }}
              >
                {item}
              </Button>
            ))
          }
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              if (filter.pageNext || filter.pageNext === 0) {
                setFilter(prev => ({ ...prev, pageIndex: prev.pageNext }))
              }
            }}
            disabled={!filter.pageNext}
          >
            Next
          </Button>
        </div>
      </div>
      <div className="pb-4 flex gap-2 text-[13px] items-center">
        Hiển thị
        <Select onValueChange={(value) => {
          setFilter(prev => ({
            ...prev,
            pageIndex: 0,
            pageSize: + value
          }))
        }} defaultValue="5">
          <SelectTrigger className="w-15 h-8">
            <SelectValue></SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="15">15</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="25">25</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        trên
        {" "}
        {count}
        {" "}
        danh mục
      </div>
    </div>
  )
}
