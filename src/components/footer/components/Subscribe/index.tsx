const Subscribe: React.FC = () => {
  return (
    <div className="xl:m-0 mt-12 xl:w-96 w-64">
      <p className="text-[#FFFFFF] font-Lato font-thin">
        Subscribe to stay tuned for new web design and latest updates. Let's do
        it!
      </p>
      <div className="flex items-center mt-4 bg-[#FFFFFF] rounded-lg  ">
        <input
          type="text"
          placeholder="Enter your email"
          className="h-10 xl:w-60 w-36 m-1 text-2xl placeholder:px-4 placeholder:xl:text-2xl placeholder:text-sm  border-none outline-none font-Lato font-thin caret-[#72B01D]"
        />
        <button className="p-4 m-1 xl:w-1/3 w-40 border text-[#FFFFFF] hover:bg-[#7EC11F] bg-[#23B123] text-xs rounded-xl">
          Subscribe
        </button>
      </div>
    </div>
  );
};
export default Subscribe;
