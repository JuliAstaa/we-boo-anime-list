import { CaretDoubleRight } from "@phosphor-icons/react/dist/ssr/CaretDoubleRight";
import Link from "next/link";

const BoxContainerHeader = ({ title, href }: any) => {
  return (
    <div className="box-header w-full flex justify-between">
      <h1 className=" font-semibold border-b-2 border-slate-700 w-fit text-sky-500 lg:text-xl">
        {title}
      </h1>
      {href ? (
        <Link href={href} className="">
          <p className="text-sky-500 flex justify-between items-center">
            More <CaretDoubleRight size={18} />
          </p>
        </Link>
      ) : null}
    </div>
  );
};

export default BoxContainerHeader;
