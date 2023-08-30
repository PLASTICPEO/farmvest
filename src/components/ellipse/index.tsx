import elipse from "../../assets/photos/Ellipse123.svg";

const CustomEllipse: React.FC<{ firstPosition: string }> = ({
  firstPosition,
}) => {
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

export default CustomEllipse;
