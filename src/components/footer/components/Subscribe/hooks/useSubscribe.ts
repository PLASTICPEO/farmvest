import { useContext, useState } from "react";
import { AppContext } from "../../../../../context/AppContext";
import { emailSchema } from "../../../../../schema";

export const useSubscribe = () => {
  const { success, error } = useContext(AppContext);
  const [receivedEmail, setReceivedEmail] = useState("");

  const validateEmail = (email: string) => {
    try {
      return emailSchema.parse(email); // Use the email schema for validation
    } catch (error) {
      return false;
    }
  };

  const enterYourEmail = () => {
    if (validateEmail(receivedEmail)) {
      success(`${receivedEmail} has been subscribed !`);
      setReceivedEmail(" ");
    } else {
      error(`"${receivedEmail}" Email is not valid, please enter correctly`);
    }
  };
  return { enterYourEmail, setReceivedEmail, receivedEmail };
};
