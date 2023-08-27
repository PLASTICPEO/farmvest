import { useMenu } from "./hooks/useMenu";
import { MenuTypes } from "./menu.types";
import { Link } from "react-router-dom";

const Menu: React.FC<MenuTypes> = ({ items }) => {
  const { isOpen, toggleMenu } = useMenu();

  return (
    <div>
      <div className="absolute top-[0%] left-[0%] w-full bg-[#D5D5D7] font-Lato text-lg xl:font-thin z-50">
        <div onClick={toggleMenu}>
          {isOpen ? (
            <div>
              <span className="absolute left-1 top-1 text-4xl material-symbols-outlined">
                close
              </span>
              <div className="flex flex-col items-center space-y-6  h-screen pt-10 text-center">
                {items.map(
                  (item: { name: string; path: string }, index: number) => {
                    return (
                      <Link to={item.path} key={index} className="w-full">
                        <p className="border-b-[1px] border-[gray] p-2 text-[#3C3C3E]">
                          {item.name}
                        </p>
                      </Link>
                    );
                  }
                )}
              </div>
            </div>
          ) : (
            <span className="xl:hidden absolute left-1 top-1 text-4xl text-[white] material-symbols-outlined">
              drag_handle
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
export default Menu;

// <p className="border-b-[1px] w-full border-[gray] p-2 text-[black] active:text-[#3C3C3E]">
//   Home
// </p>;
