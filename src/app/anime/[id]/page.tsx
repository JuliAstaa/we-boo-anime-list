import Detail from "@/components/detail/detail";
import DetailAnime from "@/components/detail/detail-anime";
import Body from "@/components/Body/Body";
import BoxContainer from "@/components/utils/BoxContainer/BoxContainer";
import { FetchingData } from "@/libs/api-libs";
import Episode from "@/components/episode/episode";

const Page = async ({ params }: any) => {
  const { data } = await FetchingData(`anime/${params.id}`, ``);
  return (
    <Body resource={"anime"}>
      <BoxContainer>
        <Detail params={params.id} data={data}>
          <DetailAnime data={data} />
        </Detail>
        <Episode mal_id={params.id} title={data.title} />
      </BoxContainer>
    </Body>
  );
};

export default Page;
