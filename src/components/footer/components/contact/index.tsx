import { ContactTypes } from "./contact.types";

const ContactDetails: React.FC<ContactTypes> = ({ socialItems }) => {
  return (
    <div className="xl:flex justify-between xl:w-96 w-64 xl:space-x-4 text-[#FFFFFF] font-Lato font-thin">
      <div className="xl:m-0 mt-12 ">
        <p>Follow us</p>
        <div className="flex items-center space-x-3 mt-2">
          {socialItems.map((item: any, index: number) => {
            return (
              <a href={item.src} key={index}>
                <img src={item.icon} alt={item.platform} />
              </a>
            );
          })}
        </div>
      </div>
      <div className="xl:mt-0 mt-4 space-y-3 ">
        <p>Cell us</p>
        <p>+1 800 854-36-80</p>
      </div>
    </div>
  );
};

export default ContactDetails;
