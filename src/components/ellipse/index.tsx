import elipse from "../../assets/photos/Ellipse 123.svg";

const Ellipse: React.FC<{ firstPosition: string }> = ({ firstPosition }) => {
  return (
    <>
      <img
        src={elipse}
        alt="elipse"
        className={`absolute ${firstPosition} animate-pulse`}
      />
    </>
  );
};

export default Ellipse;
