import { ButtonProps } from "../../Types/Types";

const PaginationButton = ({
  page,
  setPage,
  limit,
  hasNext,
  hasPrev,
  setSearchParams,
  totalPages
}: ButtonProps) => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
      <span className="text-slate-700 font-medium">
        Page:  <span className="font-bold text-slate-900">{page} Of {totalPages}</span>
      </span>
      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            setPage(page - 1);
            setSearchParams({
              _page: String(page - 1),
              _limit: String(limit),
            });
          }}
          disabled={!hasPrev}
          className={`
            px-6 py-2 rounded-xl font-medium transition-all cursor-pointer
            ${
              hasPrev
                ? "bg-slate-600 text-white hover:bg-slate-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }
          `}
        >
          Prev
        </button>

        <button
          onClick={() => {
            setPage(page + 1);
            setSearchParams({
              _page: String(page + 1),
              _limit: String(limit),
            });
          }}
          disabled={!hasNext}
          className={`
            px-6 py-2 rounded-xl font-medium transition-all cursor-pointer
            ${
              hasNext
                ? "bg-slate-600 text-white hover:bg-slate-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }
          `}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default PaginationButton;
