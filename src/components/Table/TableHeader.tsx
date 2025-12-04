import { TableHeaderInetface } from "../../Types/Types"

const TableHeader: React.FC<TableHeaderInetface> = ({allSelected, onSelectedAll}: TableHeaderInetface) => {
  return (

  <tr className="border-b border-gray-300">
    <th className="p-3 border-r w-10">
      <input type="checkbox" checked={allSelected} onChange={onSelectedAll} />
    </th>
    <th className="p-3 border-r w-[60px]">#id</th>
    <th className="p-3 border-r min-w-[150px]">Name</th>
    <th className="p-3 border-r min-w-[200px]">Email</th>
    <th className="p-3 border-r min-w-[300px]">Body</th>
    <th className="p-3 border-r min-w-[100px]">Status</th>
    <th className="p-3 min-w-[120px]">Actions</th>
  </tr>


  )
}

export default TableHeader
