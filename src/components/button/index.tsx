const CustomButton: React.FC<{
  title: string;
  border?: Boolean;
  onClick?: () => void;
  isWhite?: boolean;
}> = ({ title, border, isWhite, onClick }) => {
  if (border) {
    return (
      <button
        onClick={onClick}
        className={`py-4 xl:w-40 w-24 ${
          isWhite
            ? "text-[#FFFFFF] border-[#FFFFFF]"
            : "text-[#000505] border-[#000505]"
        } border-[1px] border-[#E0E0E0] hover:border-[#B8B8B8] hover:text-[#B8B8B8] text-xs rounded outline-none`}
      >
        {title}
      </button>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className="py-4 xl:w-40 w-24 text-[#FFFFFF] hover:bg-[#7EC11F] bg-[#23B123] text-xs rounded outline-none"
      >
        {title}
      </button>
    );
  }
};

export default CustomButton;
