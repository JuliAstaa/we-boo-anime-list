import { FetchingData } from "@/libs/api-libs";
import Link from "next/link";

const Episode = async ({ mal_id, title }: any) => {
  const video: any = await FetchingData(`anime/${mal_id}/videos`, "");

  return (
    <div className="w-full">
      <h1 className="text-xl font-semibold  border-slate-700 w-fit text-sky-500 mt-8">
        Episode {title}
      </h1>
      <div className="w-full h-96 overflow-y-auto ">
        <ul>
          {video.data.episodes.map((episode: any) => {
            return (
              <li
                className=" w-full h-fit flex gap-4 border-b-[0.5px] border-slate text-sm text-slate-400"
                key={episode.mal_id}
              >
                <div className="flex justify-between w-full items-center py-4">
                  <div className="flex w-[70%] items-center justify-start lg:w-[90%]">
                    <div className="w-full lg:w-[15%]">
                      <p>{episode.episode}</p>
                    </div>
                    <div className="w-1/2 hidden lg:flex">
                      <p>{episode.title}</p>
                    </div>
                  </div>
                  <div className="tonton w-full flex justify-end lg:w-[10%]  lg:justify-center">
                    <Link
                      href={episode.url}
                      className="p-1 bg-slate-800 rounded-sm text-slate-200"
                    >
                      Watch
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Episode;
