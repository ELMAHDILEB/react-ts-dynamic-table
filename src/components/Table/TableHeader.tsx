import { TableHeaderInetface } from "../../Types/Types"

const TableHeader: React.FC<TableHeaderInetface> = ({allSelected, onSelectedAll}: TableHeaderInetface) => {
  return (
    <thead className="bg-gray-100 text-left">
    <tr className="border-b border-gray-300 ">
      <th className="p-3 border-r border-gray-300">
        <input
          type="checkbox"
          checked={allSelected}
          onChange={onSelectedAll}
        />
      </th>
      <th className="p-3 border-r border-gray-300 w-[5%]">#id</th>
      <th className="p-3 border-r border-gray-300 w-[15%]">Name</th>
      <th className="p-3 border-r border-gray-300 w-[20%]">Email</th>
      <th className="p-3 border-r border-gray-300 w-[35%]">Body</th>
      <th className="p-3 border-r border-gray-300 w-[10%]">Status</th>
      <th className="p-3 border-r border-gray-300 w-[10%]">Actions</th>
    </tr>
  </thead>
  )
}

export default TableHeader
