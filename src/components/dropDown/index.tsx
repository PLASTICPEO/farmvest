import { useDropDown } from "./hooks/useDropDown";

const DropDown: React.FC<{ dropDownItems: { text: string; id: number }[] }> = ({
  dropDownItems,
}) => {
  const { selecterTitle, setToggle, dropDownToggle, selected } = useDropDown();

  return (
    <div className="xl:mt-2 mt-4 xl:px-4 px-2 xl:w-80 select-none">
      <div
        className={`bg-[#FFFFFF] bg-opacity-10
         w-full p-4 rounded-lg `}
      >
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setToggle(!dropDownToggle)}
        >
          <p className="text-[#FFFFFF] text-opacity-60 text-sm ">
            {selecterTitle}
          </p>
          <div className="cursor-pointer flex justify-center items-center">
            <span className="material-symbols-outlined text-[#FFFFFF] ">
              expand_more
            </span>
          </div>
        </div>

        {dropDownToggle ? (
          <div
            className={` w-full border-t-[1px] border-[#B0B3BF] ${
              dropDownToggle ? "bg-opacity-50 " : "bg-opacity-10 "
            } `}
          >
            {dropDownItems.map((item: { text: string; id: number }) => (
              <p
                onClick={() => selected(item.text)}
                key={item.id}
                className={`text-[#FFFFFF] text-sm hover:text-opacity-70  cursor-pointer p-1 rounded-lg`}
              >
                {item.text}
              </p>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default DropDown;
