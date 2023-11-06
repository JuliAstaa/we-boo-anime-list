import Search from "@/components/search/Search";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="bg-black w-full gap-2 flex items-center justify-between py-4 px-2 m-auto border-b-2 border-slate-500  dark:bg-dark flex-wrap lg:w-[90%] xl:w-[75%]">
        <div className="flex flex-col w-full justify-between items-center gap-2 lg:gap-4 lg:w-3/4 lg:flex-row lg:p-4 ">
          <Link href={"/"} className="w-full lg:w-1/4 xl:w-1/2">
            <h1 className="font-bold text-2xl ">WE BOO</h1>
          </Link>
          <Search />
        </div>
        <div>
          <Link href={"/genres"} className="text-slate-300 hover:text-sky-600">
            Genre
          </Link>
        </div>
        <div className="light-dark mr-2">Dark</div>
      </div>
    </div>
  );
};

export default Navbar;
