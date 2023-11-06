import FetchedData from "../fetchedData/fetched-data";
import BoxContainer from "../utils/BoxContainer/BoxContainer";
import BoxContainerHeader from "../utils/BoxContainer/BoxContainerHeader";

const DataGenres = ({ genre, genreId, resource, href, title }: any) => {
  return (
    <div>
      <BoxContainerHeader title={`${genre} genre ${title}`} />
      <BoxContainer>
        <FetchedData
          resource={resource}
          query={`genres=${genreId}&page=`}
          href={href}
        />
      </BoxContainer>
    </div>
  );
};

export default DataGenres;
