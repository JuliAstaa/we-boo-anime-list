import Body from "@/components/Body/Body";
import BoxContainer from "@/components/utils/BoxContainer/BoxContainer";
import Genre from "@/components/genre/genre";
import AllGenres from "@/components/genre/allGenres";
import { FetchingData } from "@/libs/api-libs";

const Page = async () => {
  const animeGenre = await FetchingData("genres/anime", "");
  const mangaGenre = await FetchingData("genres/manga", "");

  return (
    <Body>
      <BoxContainer>
        <Genre>
          <AllGenres
            genres={animeGenre.data}
            title={"anime"}
            resource={"anime"}
          />
        </Genre>
        <Genre>
          <AllGenres
            genres={mangaGenre.data}
            title={"manga"}
            resource={"manga"}
          />
        </Genre>
      </BoxContainer>
    </Body>
  );
};

export default Page;
