import Link from "next/link";

const allGenres = ({ genres, title, resource }: any) => {
  return (
    <div>
      <h1 className="text-xl font-semibold border-b-2 border-slate-700 w-fit text-sky-500">
        Genre for {title}
      </h1>
      <div className="grid grid-cols-4 w-[75%] mb-16 mt-4 gap-[4px]">
        {genres.map((genre: any) => {
          return (
            <Link
              key={genre.mal_id}
              href={`/genres/${resource}/${genre.mal_id}/${genre.name}`}
              className="hover:text-sky-500 text-slate-400 text-sm"
            >
              {genre.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default allGenres;
