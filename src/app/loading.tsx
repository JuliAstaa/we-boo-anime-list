import { CircleNotch } from "@phosphor-icons/react/dist/ssr/CircleNotch";

const Loading = () => {
  return (
    <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center gap-4">
      <CircleNotch size={32} className="animate-spin" />{" "}
      <p className="text-xl">Loading...</p>
    </div>
  );
};

export default Loading;
