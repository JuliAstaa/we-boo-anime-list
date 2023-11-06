import { CaretDoubleRight, FileSearch } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center gap-4 ">
      <div className="folder">
        <FileSearch size={64} />
      </div>
      <div className="info flex gap-4 text-2xl">
        <p>404</p>
        <span>|</span>
        <p className="flex">Page not found</p>
      </div>
      <div className="link-back">
        <Link
          href={"/"}
          className="text-sky-500 gap-2  flex justify-center items-center hover:text-sky-600"
        >
          Kembali <CaretDoubleRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
