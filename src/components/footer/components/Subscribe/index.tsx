import CustomButton from "../../../button";
import { useSubscribe } from "./hooks/useSubscribe";

const Subscribe: React.FC = () => {
  const { setReceivedEmail, enterYourEmail, receivedEmail } = useSubscribe();

  return (
    <div className="xl:m-0 mt-12 xl:w-96 w-64">
      <p className="text-[#FFFFFF] font-Lato font-thin">
        Subscribe to stay tuned for new web design and latest updates. Let's do
        it!
      </p>
      <div className="flex items-center justify-between mt-4 bg-[#FFFFFF] rounded-lg p-1">
        <input
          onChange={(e) => setReceivedEmail(e.target.value)}
          type="text"
          placeholder="Enter your email"
          className="h-10 xl:w-60 w-28 m-1 text-2xl placeholder:px-4 placeholder:xl:text-2xl placeholder:text-sm  border-none outline-none font-Lato font-thin caret-[#72B01D]"
          value={receivedEmail}
        />
        <CustomButton onClick={enterYourEmail} title="Subscribe" />
      </div>
    </div>
  );
};
export default Subscribe;
