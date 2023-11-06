import { FetchingData } from "@/libs/api-libs";
import Body from "@/components/Body/Body";
import TopList from "@/components/TopList/TopList";
import BoxContainer from "@/components/utils/BoxContainer/BoxContainer";
import BoxContainerHeader from "@/components/utils/BoxContainer/BoxContainerHeader";

const SearchPage = async ({ params }: any) => {
  const url = params.keyword;
  const href = params.select;
  const keyword = url.replace(/%20/g, " ");
  const data = await FetchingData(`${params.select}`, `q=${params.keyword}`);
  return (
    <Body>
      <BoxContainerHeader
        title={`Pencarian berdasarkan "${params.select}" dengan keyword "${keyword}" `}
      />
      <BoxContainer>
        <TopList api={data.data} href={href} />
      </BoxContainer>
    </Body>
  );
};

export default SearchPage;
