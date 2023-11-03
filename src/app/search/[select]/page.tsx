import Body from "@/components/Body/Body";
import TopList from "@/components/TopList/TopList";
import BoxContainer from "@/components/utils/BoxContainer/BoxContainer";
import BoxContainerHeader from "@/components/utils/BoxContainer/BoxContainerHeader";

const SearchPage = async ({ params }: any) => {
  const respone = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/${params.select}`
  );
  const datas = await respone.json();
  const data = datas.data;

  return (
    <Body>
      <BoxContainerHeader title={`Pencarian berdasarkan "${params.select}"`} />
      <BoxContainer>
        <TopList api={data} href={params.select} />
      </BoxContainer>
    </Body>
  );
};

export default SearchPage;
