import Image from "next/image";

const TopCharacter = async () => {
  const respone = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/characters?limit=10`
  );
  const characters = await respone.json();

  return (
    <div>
      <h1 className="text-xl font-semibold border-b-2 border-slate-700 w-fit text-sky-500 ml-4">
        Top Character
      </h1>
      <div className="h-full w-full border-l-2 border-s-slate-700 flex flex-col px-4 py-4">
        {characters.data.map((character: any) => {
          return (
            <div
              className="top-character w-full h-fit py-2 "
              key={character.mal_id}
            >
              <div className="flex w-full h-full gap-4 ">
                <div className="img">
                  <Image
                    src={character.images.webp.image_url}
                    alt=""
                    width={100}
                    height={100}
                    className="w-20 h-20"
                  />
                </div>
                <div className="name w-full h-full flex flex-col justify-center">
                  <p>{character.name}</p>
                  <p>{character.name_kanji}</p>
                </div>
              </div>
              <div className="block w-full h-[1px] bg-slate-600 my-1"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopCharacter;
