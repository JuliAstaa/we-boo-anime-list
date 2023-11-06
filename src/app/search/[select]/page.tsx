import Body from "@/components/Body/Body";
import TopList from "@/components/TopList/TopList";
import BoxContainer from "@/components/utils/BoxContainer/BoxContainer";
import BoxContainerHeader from "@/components/utils/BoxContainer/BoxContainerHeader";
import { FetchingData } from "@/libs/api-libs";

const SearchPage = async ({ params }: any) => {
  const data = await FetchingData(`top/${params.select}`, "");
  return (
    <Body>
      <BoxContainerHeader title={`Pencarian berdasarkan "${params.select}"`} />
      <BoxContainer>
        <TopList api={data.data} href={params.select} />
      </BoxContainer>
    </Body>
  );
};

export default SearchPage;
