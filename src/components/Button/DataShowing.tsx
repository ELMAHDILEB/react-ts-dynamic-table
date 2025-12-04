import { dataShowingType } from "../../Types/Types"

const DataShowing = ({valueLimit, onSetValueLimit}: dataShowingType) => {
  return (
    <div>
         <label >Data Showing: </label>
         <select value={valueLimit} onChange={(e)=> onSetValueLimit(Number(e.target.value))}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
         </select>
    </div>
  )
}

export default DataShowing
