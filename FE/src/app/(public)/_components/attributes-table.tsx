import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function AttributesTable({ attributes }: {
  attributes: {
    name: string,
    value: string,
    _id: string
  }[]
}) {
  return (
    <div className="w-full px-3 pb-3">
      <Table>
        <TableBody>
          {attributes.map((item) => (
            <TableRow key={item._id}>
              <TableCell className="font-bold">{item.name}</TableCell>
              <TableCell>{item.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
