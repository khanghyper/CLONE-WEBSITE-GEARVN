// 'use client'
// import categoryApiRequest from "@/apiRequest/category"
// import Action from "@/app/(private)/admin/categories/all/action"
// import { Button } from "@/components/ui/button"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import envConfig from "@/config"
// import { MoreHorizontal } from "lucide-react"
// import { useEffect, useState } from "react"

// type Category = {
//   _id: string,
//   name: string
//   slug: string
//   description: string
// }

// type CategoriesRes = {
//   message: string,
//   data: Category[]
// }

// export default function CategoriesTable() {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [subCategories, setSubCategories] = useState<Category[]>([])
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const getListCategory = async () => {
//       setLoading(true);
//       try {
//         const categoriesRes = (await categoryApiRequest.findAll()) as { status: number, payload: any };
//         setCategories([...categoriesRes.payload.data])
//       } catch (error) {
//         setLoading(false);
//       } finally {
//         setLoading(false);
//       }
//     }
//     getListCategory()
//   }, [])

//   return (
//     <div className="pl-3 pr-4">
//       <div className="bg-white shadow rounded px-1">
//         {loading && (
//           <div>loading...</div>
//         )}
//         {!loading && (
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead className="">Danh mục</TableHead>
//                 <TableHead>Danh mục cha</TableHead>
//                 <TableHead>Mô tả</TableHead>
//                 <TableHead></TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {categories.map((item: any) => (
//                 <TableRow key={item._id}>
//                   <TableCell className="font-medium">{item.name}</TableCell>
//                   <TableCell>{item?.parentId?.name ?? ''}</TableCell>
//                   <TableCell>{item.description}</TableCell>
//                   <TableCell>
//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <Button variant="ghost" className="h-8 w-8 p-0">
//                           <MoreHorizontal className="h-4 w-4" />
//                         </Button>
//                       </DropdownMenuTrigger>
//                       <Action id={item._id} />
//                     </DropdownMenu>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         )}
//       </div>
//     </div>
//   )
// }
'use client'
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import UserProvider, { context, UserContextType } from "@/app/(private)/admin/categories/all/test-context"




export function CategoriesTable() {
  const { categories } = useContext(context) as UserContextType

  return (
    <>
      <div className="px-4">
        <DataTable columns={columns} data={categories} />
      </div>
    </>
  )
}
