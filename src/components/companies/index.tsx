import Fidelity from "../../assets/photos/businessLogo/Fidelity.svg";
import Business from "../../assets/photos/businessLogo/Business.svg";
import Forbes from "../../assets/photos/businessLogo/Forbes.svg";
import MarketWatch from "../../assets/photos/businessLogo/MarketWatch.svg";
import Wired from "../../assets/photos/businessLogo/WIRED.svg";

const companiesLogos = [
  { src: Fidelity, company: "Fidelity" },
  { src: Business, company: "Business" },
  { src: Forbes, company: "Forbes" },
  { src: MarketWatch, company: "MarketWatch" },
  { src: Wired, company: "Wired" },
];

const Companies: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-20 xl:space-x-20 space-x-2">
        {companiesLogos.map((item: any, index: number) => {
          return (
            <img
              src={item.src}
              alt={item.company}
              className="xl:w-24 w-16 "
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Companies;
