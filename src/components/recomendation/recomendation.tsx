import BoxContainerHeader from "../utils/BoxContainer/BoxContainerHeader";
import TopList from "../TopList/TopList";
import { FetchingNestedData, randomizeData } from "@/libs/api-libs";

const Recommendation = async ({ resource }: any) => {
  if (resource) {
    let recomendedAnime = await FetchingNestedData(
      `recommendations/${resource}`,
      "entry"
    );

    recomendedAnime = randomizeData(recomendedAnime, 10);

    return (
      <div>
        <BoxContainerHeader title={`Recommended ${resource}`} />
        <div className="w-full mb-10">
          <TopList api={recomendedAnime.data} href={resource} />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Recommendation;
