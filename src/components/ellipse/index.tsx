import elipse from "../../assets/photos/Ellipse123.svg";

const Ellipse: React.FC<{ firstPosition: string }> = ({ firstPosition }) => {
  return (
    <div>
      <img
        src={elipse}
        alt="elipse"
        className={`absolute ${firstPosition} animate-pulse z-50`}
      />
    </div>
  );
};

export default Ellipse;
