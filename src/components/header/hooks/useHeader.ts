import { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";

interface LoginRefElement {
  closeModal: () => void;
  openModal: () => void;
  isModalOpen: boolean;
}

export const useHeader = () => {
  const { scrollY, success } = useContext(AppContext);
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const loginRef = useRef<LoginRefElement | null>(null);

  const handleLogin = (event: any) => {
    loginRef.current?.closeModal();
    success(`${event.Email} Successful login !`);
  };

  const handleRegister = (event: any) => {
    loginRef.current?.closeModal();
    success(`${event.Username} Successful registration !`);
  };

  useEffect(() => {
    // Show/hide the header based on scroll position
    setHeaderVisible(scrollY <= 400);
  }, [scrollY]);
  return { loginRef, isHeaderVisible, handleLogin, handleRegister };
};
