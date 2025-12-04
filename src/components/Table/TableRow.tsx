import { TableRowInetface } from "../../Types/Types";

const TableRow = ({ item, selectedOne, onSelectedOne }: TableRowInetface) => {
  const { id, name, email, body } = item;
  const isSelected = selectedOne.includes(id);

  return (

      <tr
        className={`border-b border-gray-200 hover:bg-gray-100 ${
          isSelected ? "bg-gray-100" : ""
        } transition`}
      >
        <td className="p-3 border-r w-10">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onSelectedOne(id)}
          />
        </td>

        <td className="p-3 font-medium border-r">{id}</td>
        <td className="p-3 border-r">{name}</td>
        <td className="p-3 border-r">{email}</td>

        <td className="p-3 border-r line-clamp-2">{body}</td>

        <td className="p-3 border-r">
          <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm cursor-pointer">
            Active
          </span>
        </td>

        <td className="p-3 flex gap-2">
          <button className="px-2 py-1 text-blue-600 hover:underline text-sm cursor-pointer">
            Edit
          </button>
          <button className="px-2 py-1 text-red-600 hover:underline text-sm cursor-pointer">
            Delete
          </button>
        </td>
      </tr>

  );
};

export default TableRow;
