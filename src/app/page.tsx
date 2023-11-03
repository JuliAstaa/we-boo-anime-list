import TopList from "@/components/TopList/TopList";
import BoxContainer from "@/components/utils/BoxContainer/BoxContainer";
import Body from "@/components/Body/Body";
import BoxContainerHeader from "@/components/utils/BoxContainer/BoxContainerHeader";

const Home = async () => {
  const responeAnime = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
  );
  const datasAnime = await responeAnime.json();
  const animes = datasAnime.data;

  const responeManga = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga?limit=10`
  );
  const datasManga = await responeManga.json();
  const mangas = datasManga.data;

  return (
    <Body>
      <BoxContainerHeader title={"Popular Anime"} href={"/popular-anime"} />
      <BoxContainer title={"Popular Anime"}>
        <TopList api={animes} href={"anime"} />
      </BoxContainer>
      <BoxContainerHeader title={"Top Manga"} href={"top-manga"} />
      <BoxContainer title={"Top Manga"}>
        <TopList api={mangas} href={"manga"} />
      </BoxContainer>
    </Body>
  );
};

export default Home;
