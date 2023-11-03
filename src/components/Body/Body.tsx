import TopCharacter from "../TopCharacter/TopCharacter";

const Body = ({ children }: any) => {
  return (
    <div className="w-full mt-16">
      <div className="m-auto w-[75%] flex gap-4">
        <div className="box w-[75%]">{children}</div>
        <div className="top-character">
          <TopCharacter />
        </div>
      </div>
    </div>
  );
};

export default Body;
