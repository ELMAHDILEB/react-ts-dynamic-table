import { useState } from "react";
import { useGetCommentsQuery } from "../../features/api/apiComments";
import type { TypesData } from "../../Types/Types";
import { FadeLoader } from "react-spinners";
import PaginationButton from "../Button/PaginationButton";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import SearchUI from "../Search/SearchUI";
import searchLogic from "../Search/searchLogic";

const TableUI = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const limit = 10;

  const {
    data = [],
    isLoading,
    error,
  } = useGetCommentsQuery({
    page,
    limit,
  });

  const [selected, setSelected] = useState<number[]>([]);
  const filtredData = searchLogic(data, searchTerm)

  if (isLoading)
    return (
      <div className="w-full h-screen flex items-center justify-center ">
        <FadeLoader />
      </div>
    );
  if (error) return <div>Failed To Fetch Data</div>;

  const handleSelectAll = () => {
    if (selected.length === data?.length) {
      setSelected([]);
    } else {
      setSelected(data?.map((item: TypesData) => item.id));
    }
  };

  const handleSelectOne = (id: number) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((i) => i !== id));
    } else {
      setSelected([...selected, id]);
    }
  };



  const hasNext = data.length === limit;
  const hasPrev = page > 1;

  return (
    <>
    <SearchUI setSearchTerm={setSearchTerm} />
      <table
        border={1}
        cellPadding="10"
        className="w-full border border-gray-300 rounded-md overflow-hidden shadow-sm"
      >
        <TableHeader
          allSelected={data.length === selected.length}
          onSelectedAll={handleSelectAll}
        />
        <tbody>
         {
         !isLoading && filtredData.length > 1 ? (filtredData?.map(item =>(
                <TableRow key={item.id} item={item} selectedOne={selected}  onSelectedOne={handleSelectOne}/> 
              ))) : (<p>no data founded</p>)
         }
        </tbody>
      </table>
    {
      filtredData.length > 1 ? (
        <PaginationButton
        page={page}
        setPage={setPage}
        hasNext={hasNext}
        hasPrev={hasPrev}
      />
      ) : ""
    }
    </>
  );
};

export default TableUI;
