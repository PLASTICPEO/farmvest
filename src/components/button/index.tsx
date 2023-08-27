const Button: React.FC<{ title: string; border?: Boolean }> = ({
  title,
  border,
}) => {
  if (border) {
    return (
      <button className="py-4 xl:w-40 w-24 text-[#FFFFFF] border-[1px] border-[#E0E0E0] hover:border-[#B8B8B8] hover:text-[#B8B8B8] text-xs rounded">
        {title}
      </button>
    );
  } else {
    return (
      <button className="py-4 xl:w-40 w-24 text-[#FFFFFF] hover:bg-[#7EC11F] bg-[#23B123] text-xs rounded">
        {title}
      </button>
    );
  }
};

export default Button;
