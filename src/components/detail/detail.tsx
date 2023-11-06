import Image from "next/image";

const Detail = async ({ data, children }: any) => {
  return (
    <div className="body">
      <div className="w-full border-b-2 border-slate-700 pb-10">
        <h1 className="font-semibold">{data.title}</h1>
      </div>
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-4 lgmy-10 ">
        <Image
          src={data.images.webp.image_url}
          alt=""
          width={200}
          height={200}
          className="w-full h-fit"
        ></Image>
        <div className="col-span-2">
          <h3 className="font-semibold "> Synopsis {data.title}</h3>
          <p className="text-slate-400 pt-4 text-sm">{data.synopsis}</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Detail;
