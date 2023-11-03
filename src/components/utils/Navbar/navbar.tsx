import Search from "@/components/search/Search";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="bg-black w-[75%] flex items-center justify-between py-4 m-auto border-b-2 border-slate-500">
        <div className="flex w-1/2 justify-between items-center gap-4">
          <Link href={"/"} className="w-1/2">
            <h1 className="font-bold text-2xl ">WE BOO</h1>
          </Link>
          <Search />
        </div>
        <div className="light-dark">Dark</div>
      </div>
    </div>
  );
};

export default Navbar;
