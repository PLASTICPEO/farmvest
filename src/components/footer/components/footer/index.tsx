const SubFooter: React.FC = () => {
  return (
    <div className="xl:flex items-center justify-between xl:mx-20 mx-10 py-10 text-[#FFFFFF] font-thin text-xs">
      <div>
        <p>© 2023 All Rights Reserved</p>
      </div>
      <div className="xl:flex items-center xl:space-x-10 xl:mt-0 mt-4">
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p>Sales and Refunds</p>
        <p>Legal</p>
        <p>Site Map</p>
      </div>
    </div>
  );
};

export default SubFooter;
