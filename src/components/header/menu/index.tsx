import { Link } from "react-router-dom";

const HeaderMenu: React.FC<{ items: { name: string; path: string }[] }> = ({
  items,
}) => {
  return (
    <div className="xl:flex hidden flex items-center space-x-8 text-[#FFFFFF] font-Lato text-lg font-thin">
      {items.map((item: any, index: number) => {
        return (
          <Link key={index} to={item.path}>
            <p>{item.name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default HeaderMenu;
