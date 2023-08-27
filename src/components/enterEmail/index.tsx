import TitleDescriptionBlock from "../titleDescriptionBlock";

const EnterEmail: React.FC = () => {
  return (
    <div>
      <div className="xl:max-w-[500px] m-auto">
        <TitleDescriptionBlock
          title="The easiest and fastest way to Invest in Agriculture"
          specialWord="Invest"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur "
          titleAdditionalStyle="w-full text-center"
          descripAddStyle="text-center"
        />
      </div>
      <div className="w-96 m-auto mt-5">
        <div className="flex items-center justify-between bg-[#FFFFFF] rounded-lg">
          <input
            type="text"
            placeholder="Enter your email"
            className="h-10 m-1 text-2xl placeholder:text-center border-none outline-none font-Lato font-thin caret-[#72B01D]"
          />
          <button className="p-4 border w-36 m-1 text-[#FFFFFF] hover:bg-[#7EC11F] bg-[#23B123]  text-xs rounded-xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterEmail;
