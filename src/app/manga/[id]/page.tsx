import Detail from "@/components/detail/detail";
import Body from "@/components/Body/Body";
import BoxContainer from "@/components/utils/BoxContainer/BoxContainer";
import { FetchingData } from "@/libs/api-libs";
import DetailManga from "@/components/detail/detail-manga";

const Page = async ({ params }: any) => {
  const { data } = await FetchingData(`manga/${params.id}`, ``);
  return (
    <Body resource={"manga"}>
      <BoxContainer>
        <Detail params={params.id} data={data}>
          <DetailManga data={data} />
        </Detail>
      </BoxContainer>
    </Body>
  );
};

export default Page;
