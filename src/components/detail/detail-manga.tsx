const DetailManga = ({ data }: any) => {
  return (
    <div>
      <div className="box">
        <div className="container bg-black w-full h-auto border-slate-900 border-[1px] p-4">
          <table className="text-sm text-slate-200">
            <tbody>
              <tr>
                <td>Judul</td>
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
                <td>Total Episode</td>
                <td>: </td>
                <td>{data.episodes} Episode</td>
              </tr>
              <tr>
                <td>Volume</td>
                <td>: </td>
                <td className="capitalize">
                  {data.volume ? data.volume : "-"}
                </td>
              </tr>
              <tr>
                <td>Chapter</td>
                <td>: </td>
                <td className="capitalize">
                  {data.chapter ? data.chapter : "-"}
                </td>
              </tr>
              <tr>
                <td>Tipe</td>
                <td>: </td>
                <td>{data.type}</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>: </td>
                <td>{data.status}</td>
              </tr>
              <tr>
                <td>Author</td>
                <td>: </td>
                <td>
                  {data.authors.map((autor: any, index: any, array: any) => {
                    if (index === array.length - 1) {
                      return `${autor.name}`;
                    } else {
                      return `${autor.name}, `;
                    }
                  })}
                </td>
              </tr>
              <tr>
                <td>Score</td>
                <td>: </td>
                <td>{data.score}</td>
              </tr>
              <tr>
                <td>Published on</td>
                <td>: </td>
                <td>{data.published.string}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default DetailManga;
