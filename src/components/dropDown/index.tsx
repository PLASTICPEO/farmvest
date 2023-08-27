import { useState } from "react";

const DropDown: React.FC<{ dropDownItems: { text: string; id: number }[] }> = ({
  dropDownItems,
}) => {
  const [dropDownToggle, setToggle] = useState(false);
  const [selecterTitle, setSelected] = useState("What is FarmVest ?");

  const selected = (title: any) => {
    setSelected(title);
    setToggle(!dropDownToggle);
  };

  return (
    <div className="xl:mt-2 mt-4 xl:px-4 px-2 xl:w-80  ">
      <div
        className={`bg-[#FFFFFF] relative bg-opacity-10
         w-full p-4 rounded-lg `}
      >
        <div
          className="flex items-center justify-between cursor-pointer "
          onClick={() => setToggle(!dropDownToggle)}
        >
          <p className="text-[black] text-opacity-60 text-sm ">
            {selecterTitle}
          </p>
          <div className="cursor-pointer">
            <span className="material-symbols-outlined">expand_more</span>
          </div>
        </div>
        {dropDownToggle ? (
          <div
            className={`bg-[#FFFFFF] xl:w-72 w-full ${
              dropDownToggle ? "bg-opacity-50 " : "bg-opacity-10 "
            } absolute  rounded-lg`}
          >
            {dropDownItems.map((item: { text: string; id: number }) => (
              <p
                onClick={() => selected(item.text)}
                key={item.id}
                className={`text-[black] text-sm hover:text-opacity-70  cursor-pointer p-1 rounded-lg`}
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
