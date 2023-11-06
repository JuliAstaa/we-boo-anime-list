import TopCharacter from "../TopCharacter/TopCharacter";
import Recomendation from "../recomendation/recomendation";
import Footer from "../footer/footer";

const Body = ({ children, resource }: any) => {
  return (
    <div className="w-full">
      <div className="m-auto w-full dark:bg-dark p-4 pt-16 lg:w-[90%] xl:w-[75%]">
        <div className="m-auto w-full gap-4 lg:flex">
          <div className="box w-full">
            <div className="box">{children}</div>
            <Recomendation resource={resource} />
          </div>
          <div className="top-character">
            <TopCharacter />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Body;
