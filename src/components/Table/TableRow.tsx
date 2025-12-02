import { TableRowInetface } from '../../Types/Types';

const TableRow = ({item, selectedOne, onSelectedOne}:TableRowInetface) => {
    const {id, name, email, body} = item;
    const isSelected = selectedOne.includes(id);

  return (


              <tr
                key={id}
                className={`border-b border-gray-200 hover:bg-[#e7e7e7]  ${isSelected ? "bg-[#e7e7e7]" : ""} transition cursor-pointer`}
              >
                <td className="p-3 border-r border-gray-300">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => onSelectedOne(id)}
                  />
                </td>
                <td className="p-3 font-medium border-r border-gray-300 w-[5%]">{id}</td>
                <td className="p-3 border-r border-gray-300 w-[15%]">{name}</td>
                <td className="p-3 border-r border-gray-300 w-[20%]">{email}</td>
                <td className="p-3 line-clamp-2 border-r border-gray-300 w-full">{body}</td>
                <td className="p-3 border-r border-gray-300 w-[10%]">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm border-r border-gray-300">
                    Active
                  </span>
                </td>

                <td className="p-3 flex gap-2 w-[10%]">
                  <button className="px-2 py-1 text-blue-600 hover:underline text-sm">
                    Edit
                  </button>
                  <button className="px-2 py-1 text-red-600 hover:underline text-sm">
                    Delete
                  </button>
                </td>
              </tr>
            );


}

export default TableRow
