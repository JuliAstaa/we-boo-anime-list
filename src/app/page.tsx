import TopList from "@/components/TopList/TopList";
import BoxContainer from "@/components/utils/BoxContainer/BoxContainer";
import Body from "@/components/Body/Body";
import BoxContainerHeader from "@/components/utils/BoxContainer/BoxContainerHeader";
import { FetchingData } from "../libs/api-libs";

const Home = async () => {
  const animes = await FetchingData("top/anime", "limit=10");
  const mangas = await FetchingData("top/manga", "limit=10");
  return (
    <Body resource={"anime"}>
      <BoxContainerHeader title={"Popular Anime"} href={"/popular-anime"} />
      <BoxContainer title={"Popular Anime"}>
        <TopList api={animes.data} href={"anime"} />
      </BoxContainer>
      <BoxContainerHeader title={"Top Manga"} href={"top-manga"} />
      <BoxContainer title={"Top Manga"}>
        <TopList api={mangas.data} href={"manga"} />
      </BoxContainer>
    </Body>
  );
};

export default Home;
