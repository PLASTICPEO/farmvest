const List: React.FC<{ number: number; title: string }> = ({
  number,
  title,
}) => {
  return (
    <div className="flex items-center  xl:w-60 mx-4 my-4">
      <div className="flex items-center justify-center w-10 h-10 text-2xl font-bold rounded-full text-[#FFFFFF] bg-[#FFFFFF] bg-opacity-10">
        <p>{number}</p>
      </div>
      <div className="text-[#FFFFFF] test-start ml-4">
        <p className="font-Lora font-light">{title}</p>
      </div>
    </div>
  );
};

export default List;
