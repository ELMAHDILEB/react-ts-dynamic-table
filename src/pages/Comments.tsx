import { useState } from "react";
import { useDeleteCommentMutation, useGetCommentsQuery } from "../features/api/apiComments";
import searchLogic from "../components/Search/searchLogic";
import { FadeLoader } from "react-spinners";
import { TypesData } from "../Types/Types";
import SearchUI from "../components/Search/SearchUI";
import TableHeader from "../components/Table/TableHeader";
import TableRow from "../components/Table/TableRow";
import PaginationButton from "../components/Button/PaginationButton";
import { useSearchParams } from "react-router-dom";
import useDebounced from "../hooks/useDebounced";

const Comments = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debounce = useDebounced(searchTerm, 500);
  const [page, setPage] = useState<number>(
    Number(searchParams.get("_page") || 1)
  );
  const [limit, setValueLimit] = useState<number>(Number(searchParams.get("_limit") || 10));
  const [selected, setSelected] = useState<number[]>([]);
  const {
    data = { data: [], totalCount: 0, totalPages: 1 },
    isLoading,
    error,
  } = useGetCommentsQuery({
    page,
    limit,
    search: debounce,
  });
  const [deleteComment] = useDeleteCommentMutation();

  const comments = data?.data || [];
  const totalPages = data?.totalPages || 1;

  const filtredData = searchLogic(comments, debounce);

  if (isLoading)
    return (
      <div className="w-full h-screen flex items-center justify-center ">
        <FadeLoader />
      </div>
    );
  if (error) return <div>Failed To Fetch Data</div>;

  const handleSelectAll = () => {
    if (selected.length === comments?.length) {
      setSelected([]);
    } else {
      setSelected(comments?.map((item: TypesData) => item.id));
    }
  };

  const handleSelectOne = (id: number) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((i) => i !== id));
    } else {
      setSelected([...selected, id]);
    }
  };
  const handleDelete = async(id: number)=>{
    try {
      await deleteComment(id).unwrap(); // send request
      setSelected(selected.filter(i => i !== id))
    } catch (error) {
        console.log("Delete Failed", error)
    }
  }

  const hasNext = page < data.totalPages;
  const hasPrev = page > 1;

  return (
    <>
      <SearchUI setSearchTerm={setSearchTerm} />
      <div className="w-full overflow-x-auto rounded-md shadow-sm border border-gray-300">
        <table className="min-w-max w-full text-left">
          <thead className="bg-gray-100">
            <TableHeader
              allSelected={comments.length === selected.length}
              onSelectedAll={handleSelectAll}
            />
          </thead>

          <tbody>
            {filtredData.length > 0 ? (
              filtredData.map((item) => (
                <TableRow
                  key={item.id}
                  item={item}
                  selectedOne={selected}
                  onSelectedOne={handleSelectOne}
                  onDelete={handleDelete}
                />
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center py-4">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {filtredData.length > 0 ? (
        <PaginationButton
          page={page}
          setPage={setPage}
          limit={limit}
          hasNext={hasNext}
          hasPrev={hasPrev}
          setSearchParams={setSearchParams}
          setValueLimit={setValueLimit}
          totalPages={totalPages}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Comments;
