const Header = () => {
  return (
    <div className="w-full h-20 px-4 pt-10 xl:pt-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <p className="flex items-center text-[#FFFFFF] text-3xl font-Lato font-thin">
              FarmVest
            </p>
          </div>
          <div className="xl:flex hidden flex items-center space-x-8 text-[#FFFFFF] font-Lato text-lg font-thin">
            <p>Home</p>
            <p>About</p>
            <p>Features</p>
            <p>How it works</p>
          </div>
          <div className="flex items-center space-x-4 text-[#FFFFFF] font-Lato font-thin ">
            <button className="xl:w-32 w-24 xl:h-12 h-8 xl:py-3 py-1 xl:px-6 px-2 border-[1px] text-sm border-[#FFFFFF] rounded-lg">
              Sign In
            </button>
            <button className="xl:w-32 w-24 xl:h-12 h-8 xl:py-3 py-1 xl:px-6 px-2 text-sm rounded-lg hover:bg-[#7EC11F] bg-[#23B123]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
