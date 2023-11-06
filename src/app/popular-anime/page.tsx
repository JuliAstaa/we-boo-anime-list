import Body from "@/components/Body/Body";
import BoxContainer from "@/components/utils/BoxContainer/BoxContainer";
import BoxContainerHeader from "@/components/utils/BoxContainer/BoxContainerHeader";
import FetchedData from "@/components/fetchedData/fetched-data";

const Page = () => {
  return (
    <Body resource="anime">
      <BoxContainerHeader title={"Popular Anime"} />
      <BoxContainer title={"Popular Anime"}>
        <FetchedData resource={"top/anime"} query={`page=`} href={"anime"} />
      </BoxContainer>
    </Body>
  );
};

export default Page;
