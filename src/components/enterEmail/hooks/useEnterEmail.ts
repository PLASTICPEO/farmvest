import { useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import { emailSchema } from "../../../schema";
export const useEnterEmail = () => {
  const { success, error } = useContext(AppContext);
  const [receivedEmail, setReceivedEmail] = useState("");

  const validateEmail = (email: string) => {
    // Regular expression for basic email validation
    // const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    try {
      return emailSchema.parse(email); // Use the email schema for validation
    } catch (error) {
      return false;
    }
  };

  const enterYourEmail = () => {
    if (validateEmail(receivedEmail)) {
      success(`${receivedEmail} is successful`);
      setReceivedEmail("");
    } else {
      error(`"${receivedEmail}" Email is not valid, please enter correctly`);
    }
  };
  return { enterYourEmail, setReceivedEmail, receivedEmail };
};
