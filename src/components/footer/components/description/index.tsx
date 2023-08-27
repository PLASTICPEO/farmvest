const Description: React.FC<{ siteLogo: string }> = ({ siteLogo }) => {
  return (
    <div className="xl:w-96 w-64">
      <img src={siteLogo} alt="Logo" />
      <p className="text-[#FFFFFF] font-Lato font-thin mt-6">
        High level experience in web design and development knowledge, producing
        quality work.
      </p>
    </div>
  );
};

export default Description;
