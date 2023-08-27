import elipse from "../../assets/photos/Ellipse 123.svg";

const Ellipse: React.FC<{ firstPosition: string; secondPosition: string }> = ({
  firstPosition,
  secondPosition,
}) => {
  return (
    <>
      <img
        src={elipse}
        alt="elipse"
        className={`absolute ${firstPosition} animate-pulse`}
      />
      <img
        src={elipse}
        alt="elipse"
        className={`absolute ${secondPosition} animate-pulse`}
      />
    </>
  );
};

export default Ellipse;
