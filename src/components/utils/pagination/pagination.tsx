const Pagination = ({ setPage, page, maxPage }: any) => {
  const handleNext = () => {
    setPage((prevState: any) => prevState + 1);
  };

  const handlePrev = () => {
    setPage((prevState: any) => prevState - 1);
  };

  const handleFirstPage = () => {
    setPage(1);
  };

  const handleLastPage = () => {
    setPage(maxPage);
  };

  return (
    <div className="flex gap-4 w-full justify-center items-center my-12">
      {page != 1 ? (
        <button className="text-sky-500" onClick={handlePrev}>
          Prev
        </button>
      ) : null}

      {page != 1 ? (
        <button className="text-sky-500" onClick={handleFirstPage}>
          First
        </button>
      ) : null}

      <p>
        {page} of {maxPage}
      </p>

      {page != maxPage ? (
        <button className="text-sky-500" onClick={handleLastPage}>
          Last
        </button>
      ) : null}
      {page != maxPage ? (
        <button className="text-sky-500" onClick={handleNext}>
          Next
        </button>
      ) : null}
    </div>
  );
};

export default Pagination;
