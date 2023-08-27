import { useContext, useState } from "react";
import Button from "../button";
import TitleDescriptionBlock from "../titleDescriptionBlock";
import { AppContext } from "../../context/AppContext";

const EnterEmail: React.FC = () => {
  const { success, error } = useContext(AppContext);
  const [receivedEmail, setReceivedEmail] = useState("");

  const validateEmail = (email: string) => {
    // Regular expression for basic email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const enterYourEmail = () => {
    if (validateEmail(receivedEmail)) {
      success(`${receivedEmail} is successful`);
      setReceivedEmail("");
    } else {
      error(`"${receivedEmail}" Email is not valid, please enter correctly`);
    }
  };

  return (
    <div>
      <div className="xl:max-w-[500px] mx-auto">
        <TitleDescriptionBlock
          title="The easiest and fastest way to Invest in Agriculture"
          specialWord="Invest"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur "
          titleAdditionalStyle="w-full text-center"
          descripAddStyle="text-center"
        />
      </div>
      <div className="flex items-center justify-center mt-5 mx-2">
        <div className="flex items-center justify-between bg-[#FFFFFF] p-1 rounded-lg">
          <input
            onChange={(e) => setReceivedEmail(e.target.value)}
            type="text"
            placeholder="Enter your email"
            className="h-10  m-1 text-2xl placeholder:text-center border-none outline-none font-Lato font-thin caret-[#72B01D]"
            value={receivedEmail}
          />
          <Button onClick={enterYourEmail} title="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default EnterEmail;
