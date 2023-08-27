import { BenefitsTypes } from "./benefits.types";

const Benefits: React.FC<BenefitsTypes> = ({ imgSrc, title, text }) => {
  return (
    <div className="flex items-center mt-8 space-x-8 px-4 w-96">
      <div>
        <img src={imgSrc} alt="download" className="w-16" />
      </div>
      <div className="text-[#FFFFFF] text-sm">
        <p>{title}</p>
        <p className="font-thin mt-2">{text}</p>
      </div>
    </div>
  );
};
export default Benefits;
