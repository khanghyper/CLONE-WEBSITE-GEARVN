'use client'

// export default function CategoriesDataTable({category}:
//   {category: {
//     _id: string,
//       name: string,
//       slug: 'ban-phim',
//       description: '123',
//   }}
// ) {
//   return (
//     <div className="size-full">
//       <div className="pl-3 pr-4 ">
//         <div className="bg-white shadow rounded ">
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead className="">Danh mục</TableHead>
//                 <TableHead>Mô tả</TableHead>
//                 <TableHead></TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {categories.map((item) => (
//                 <TableRow key={item._id}>
//                   <TableCell className="font-medium">{item.name}</TableCell>
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
//         </div>
//       </div>
//     </div>
//   )
// }
