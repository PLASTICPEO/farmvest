const Card: React.FC<{
  img?: string;
  description?: string;
  title?: string;
}> = ({ img, description, title }) => {
  return (
    <div className="bg-[#FFFFFF] bg-opacity-10 flex rounded-2xl">
      {img ? (
        <div>
          <img src={img} alt="" />
        </div>
      ) : (
        <div className="w-44 h-56 bg-[#FFFFFF] bg-opacity-30 animate-pulse rounded-l-2xl"></div>
      )}
      {description ? (
        <div className="flex flex-col items-start justify-between xl:w-96 w-80 m-4 text-[#FFFFFF] xl:text-xl text-sm font-thin">
          <p>{description}</p>
          <p>{title}</p>
        </div>
      ) : (
        <div className="w-full p-4">
          <div className="w-1/3 h-6  rounded-xl mt-2 bg-[#FFFFFF] bg-opacity-10 animate-pulse"></div>
          <div className="w-1/2 h-6  rounded-xl mt-4 bg-[#FFFFFF] bg-opacity-10 animate-pulse"></div>
          <div className="w-1/3 h-6  rounded-xl mt-2 bg-[#FFFFFF] bg-opacity-10 animate-pulse"></div>
          <div className="w-1/2 h-6  rounded-xl mt-2 bg-[#FFFFFF] bg-opacity-10 animate-pulse"></div>
          <div className="w-full h-6  rounded-xl mt-2 bg-[#FFFFFF] bg-opacity-10 animate-pulse"></div>
        </div>
      )}
    </div>
  );
};

export default Card;
