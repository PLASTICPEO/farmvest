const Card: React.FC<{
  img: string;
  description: string;
  title: string;
}> = ({ img, description, title }) => {
  return (
    <div className="bg-[#FFFFFF] bg-opacity-10 flex rounded-2xl">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="flex flex-col items-start justify-between xl:w-96 w-80 m-4 text-[#FFFFFF] xl:text-xl text-sm font-thin">
        <p>{description}</p>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;
