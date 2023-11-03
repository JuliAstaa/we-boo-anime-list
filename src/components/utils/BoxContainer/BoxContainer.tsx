const BoxContainer = ({ children }: any) => {
  return (
    <div className=" w-full mb-10 ">
      <div className="grid grid-cols-5 gap-4 h-auto mt-6 relative">
        {children}
      </div>
    </div>
  );
};

export default BoxContainer;
