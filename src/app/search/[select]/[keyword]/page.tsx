import Body from "@/components/Body/Body";
import TopList from "@/components/TopList/TopList";
import BoxContainer from "@/components/utils/BoxContainer/BoxContainer";
import BoxContainerHeader from "@/components/utils/BoxContainer/BoxContainerHeader";

const SearchPage = async ({ params }: any) => {
  const respone = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${params.select}?q=${params.keyword}`
  );

  const datas = await respone.json();
  const data = datas.data;

  const url = params.keyword;
  const keyword = url.replace(/%20/g, " ");

  return (
    <Body>
      <BoxContainerHeader
        title={`Pencarian berdasarkan "${params.select}" dengan keyword "${keyword}" `}
      />
      <BoxContainer>
        <TopList api={data} href={params.select} />
      </BoxContainer>
    </Body>
  );
};

export default SearchPage;
