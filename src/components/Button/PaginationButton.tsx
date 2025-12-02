import { ButtonProps } from "../../Types/Types";

const PaginationButton = ({ page, setPage, hasNext, hasPrev }: ButtonProps) => {
  return (
    <>
      <section className="w-full p-[2%] flex items-center justify-between">
        <span>
          Page: {page} of {}
        </span>
        <div className="flex gap-10">

          <button onClick={() => setPage(page - 1)} disabled={!hasPrev} className="px-3 py-4 cursor-pointer bg-slate-500 rounded-3xl text-white">
            Prev
          </button>
          <button onClick={() => setPage(page + 1)} disabled={!hasNext} className="px-3 py-4 cursor-pointer bg-slate-500 rounded-3xl text-white">
            Next
          </button>
        </div>
      </section>
    </>
  );
};

export default PaginationButton;
