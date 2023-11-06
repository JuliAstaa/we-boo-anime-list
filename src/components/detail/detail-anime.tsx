import VideoPlayer from "../utils/VideoPalyer";

const DetailAnime = ({ data }: any) => {
  return (
    <div>
      <div className="box mt-8 lg:mt-0">
        <div className="container bg-black w-full h-auto border-slate-900 border-[1px] p-4">
          <table className="text-sm text-slate-200">
            <tbody>
              <tr>
                <td>Title</td>
                <td>: </td>
                <td>
                  {data.title}, {data.title_japanese}
                </td>
              </tr>
              <tr>
                <td>Genres</td>
                <td>: </td>
                <td>
                  {data.genres.map((genre: any, index: any, array: any) => {
                    if (index === array.length - 1) {
                      return `${genre.name}`;
                    } else {
                      return `${genre.name}, `;
                    }
                  })}
                </td>
              </tr>
              <tr>
                <td>Total Episodes</td>
                <td>: </td>
                <td>{data.episodes} Episodes</td>
              </tr>
              <tr>
                <td>Season</td>
                <td>: </td>
                <td className="capitalize">
                  {data.season ? data.season : "-"}
                </td>
              </tr>
              <tr>
                <td>Type</td>
                <td>: </td>
                <td>{data.type}</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>: </td>
                <td>{data.status}</td>
              </tr>
              <tr>
                <td>Studio</td>
                <td>: </td>
                <td>
                  {data.studios.map((studio: any, index: any, array: any) => {
                    if (index === array.length - 1) {
                      return `${studio.name}`;
                    } else {
                      return `${studio.name}, `;
                    }
                  })}
                </td>
              </tr>
              <tr>
                <td>Year</td>
                <td>: </td>
                <td>{data.year ? data.year : "-"}</td>
              </tr>
              <tr>
                <td>Duration</td>
                <td>: </td>
                <td>{data.duration}</td>
              </tr>
              <tr>
                <td>Rating</td>
                <td>: </td>
                <td>{data.rating}</td>
              </tr>
              <tr>
                <td>Score</td>
                <td>: </td>
                <td>{data.score}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {data.trailer.youtube_id ? (
        <VideoPlayer videoId={data.trailer.youtube_id} />
      ) : null}
    </div>
  );
};
export default DetailAnime;
