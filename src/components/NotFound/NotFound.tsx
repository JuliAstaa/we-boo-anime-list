import { SmileySad } from "@phosphor-icons/react/dist/ssr/SmileySad";

const NotFound = () => {
  return (
    <div className="absolute top-[15rem] left-1/2 -translate-x-3/4 ">
      <h1 className="text-2xl flex justify-center items-center gap-4">
        <SmileySad size={32} />
        Anime Not Found
      </h1>
    </div>
  );
};

export default NotFound;
