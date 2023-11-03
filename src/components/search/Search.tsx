"use client";

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr/MagnifyingGlass";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const Search = () => {
  const inputRef: any = useRef();
  const selectRef: any = useRef();
  const router = useRouter();
  const search = "search";

  const handleSearch = (e: any) => {
    e.preventDefault();
    router.push(`/search/${selectRef.current.value}/${inputRef.current.value}`);
    inputRef.current.value = "";
  };

  return (
    <div className="w-full h-fit  bg-slate-800 rounded-md">
      <form action="" className="flex">
        <input
          className="w-full h-auto text-md bg-slate-800 border-none rounded-md px-2 outline-none"
          type=""
          name=""
          id=""
          placeholder="Search..."
          ref={inputRef}
        />
        <select
          name=""
          id=""
          className="text-md bg-slate-800 border-none rounded-md p-2 outline-none"
          ref={selectRef}
        >
          <option value="anime">Anime</option>
          <option value="manga">Manga</option>
        </select>

        <button type="submit" className="ml-4 px-4" onClick={handleSearch}>
          <MagnifyingGlass size={24} />
        </button>
      </form>
    </div>
  );
};

export default Search;
