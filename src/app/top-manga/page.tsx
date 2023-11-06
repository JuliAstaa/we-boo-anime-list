import Body from "@/components/Body/Body";
import BoxContainer from "@/components/utils/BoxContainer/BoxContainer";
import BoxContainerHeader from "@/components/utils/BoxContainer/BoxContainerHeader";
import FetchedData from "@/components/fetchedData/fetched-data";

const Page = () => {
  return (
    <Body resource={"manga"}>
      <BoxContainerHeader title={"Top Manga"} />
      <BoxContainer title={"Top Manga"}>
        <FetchedData resource={"top/manga"} query={`page=`} href={"manga"} />
      </BoxContainer>
    </Body>
  );
};

export default Page;
