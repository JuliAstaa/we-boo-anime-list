import Image from "next/image";
import Link from "next/link";
import NotFound from "../NotFound/NotFound";

const PopularAnime = ({ api, href }: any) => {
  return api.length != 0 ? (
    api.map((data: any) => {
      return (
        <div key={data.mal_id}>
          <Link href={`${href}/${data.mal_id}`}>
            <div className="w-full h-full shadow-xl">
              <div className="img w-full h-[80%] ">
                <Image
                  src={data.images.webp.image_url}
                  alt=""
                  width={300}
                  height={300}
                  className="w-full h-full"
                />
                <div className="title ">
                  <h1 className="overflow-x-hidden text-sm">{data.title}</h1>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    })
  ) : (
    <NotFound />
  );
};

export default PopularAnime;
