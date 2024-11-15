"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, EllipsisVertical, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export type IProduct = {
  "_id": string,
  "name": string,
  "slug": string,
  "price": number,
  "images": string[],
  "category": {
    "_id": string,
    "name": string
  },
  "description": string,
  "discount": string,
  "inventory": number,
  "status": "ACTIVE" | 'INACTIVE' | 'DRAFT'
}

export const columns: ColumnDef<IProduct>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        className="size-3.5"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className="size-3.5"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: (_) => {
      return <div className="font-semibold text-black text-[15px] uppercase py-3 px-1">Tên sản phẩm</div>
    },
    cell: ({ row, }) => {
      const name = row.getValue('name') as string | null;
      const images = row.getValue('images') as string[] | null
      return <>
        <div className="flex gap-2 px-1">
          <div className="size-[80px]">
            <img src={images && images.length ? images[0] : ''} className="size-[80px] border rounded" alt="" />
          </div>
          <div className="w-[300px] break-words whitespace-pre-wrap">
            {name ? name : 'lỗi'}
          </div>
        </div>
      </>
    }
  },
  {
    accessorKey: "price",
    header: (_) => {
      return <div className="font-semibold text-black text-[15px] uppercase py-3">Giá</div>
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"))
      const formatted = new Intl.NumberFormat("vi", {
        style: "currency",
        currency: "VND",
      }).format(amount)

      return <div className="font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "category",
    header: (_) => {
      return <div className="font-semibold text-black text-[15px] uppercase py-3">Loại</div>
    },
    cell: ({ row }) => {
      const category = row.getValue('category') as { name: string, '_id': string } | null;
      return category ? (<div>{category.name}</div>) : (<div>không tìm thấy</div>)
    }
  },
  {
    accessorKey: "inventory",
    header: (_) => {
      return <div className="font-semibold text-black text-[15px] uppercase py-3">Số lượng</div>
    },
  },
  {
    accessorKey: "images",
    header: (_) => {
      'use client'
      return <div className="hidden"></div>
    },
    cell: (_) => {
      return <div className="hidden"></div>
    },
    size: 0,
    enableHiding: false
  },
  {
    accessorKey: "status",
    header: (_) => {
      return <div className="font-semibold text-black text-[15px] uppercase py-3">Trạng thái</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
            // onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
