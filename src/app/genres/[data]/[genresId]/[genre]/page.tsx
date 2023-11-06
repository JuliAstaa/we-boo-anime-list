import Body from "@/components/Body/Body";
import DataGenres from "@/components/genre/data-genres";

const Page = ({ params }: any) => {
  const genre = params.genre.replace(/%20/g, " ");

  return (
    <div>
      <Body resource={params.data}>
        <DataGenres
          genre={genre}
          genreId={params.genresId}
          resource={params.data}
          href={params.data}
          title={params.data}
        />
      </Body>
    </div>
  );
};

export default Page;
